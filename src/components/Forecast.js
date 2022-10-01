//----------------------------------------------------------------------------------------------------------------------

import Locations from "./Locations";
import {useState} from "react";
import Whether from "./Whether";

//----------------------------------------------------------------------------------------------------------------------

const url = "https://www.7timer.info/bin/api.pl?lon=";

//----------------------------------------------------------------------------------------------------------------------

/**
 * This component creates the forecast page.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function ForecastPage(props){
    //This array contains the 7 days forecast for specific location.
    const [whether, setWhether] = useState([]);
    //This string contains the location name that the user picks.
    const [name, setName] = useState("");
    //This string contains the source of the image that we want to show.
    const [image, setImage] = useState("../img.png");
    //This string contains the error message that we want to show.
    const [errorMessage, setErrorMessage] = useState("");
    //This boolean is checked to show the error message/
    const [isValid, setIsValid] = useState(true);

    //------------------------------------------------------------------------------------------------------------------

    /**
     * This function handles the fetch event.
     * @param name
     * @param latitude
     * @param longitude
     */
    const getData = (name, latitude, longitude) => {
        setIsValid(true);
        setImage("../loading.gif")
        fetch(url + longitude + "&lat=" + latitude + "&product=civillight&output=json")
            .then((res) => res.json())
            .then((res) => {
                setName(": " + name + ".")
                setWhether(res.dataseries);
                setImage("https://www.7timer.info/bin/astro.php?%20lon=" + longitude +"&lat="+ latitude +
                    "&ac=0&lang=en&unit=metric&output=internal&tzshift=0");
                document.getElementById("whether").style.display = "block";
            })
            .catch(() => {
                setIsValid(false);
                setImage("../img.png")
                setErrorMessage("Something went wrong, please check your internet connection and try again later!");
            })
    }

    //------------------------------------------------------------------------------------------------------------------

    /**
     * This function handle the click on the location name.
     */
    const clickHandler = () =>{
        document.getElementById("whether").style.display = "none";
        let elements = document.getElementsByClassName("cardToHide")
        for(let element of elements){
            if(element.style.display === "block"){
                getData(element.childNodes[0].childNodes[0].textContent.split(" ")[1],
                    element.childNodes[0].childNodes[0].textContent.split(" ")[3],
                    element.childNodes[0].childNodes[0].textContent.split(" ")[5])
            }
        }
    };

    //------------------------------------------------------------------------------------------------------------------

    return(
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">Forecast{name}</h5><br/>
                <p  className={isValid ? null : "alert alert-danger"}> {isValid ? '' : errorMessage}</p>
                <div className="navbar-brand">
                    <img src={image} alt=""  className="rounded mx-auto d-block img-fluid"/>
                </div>
                <Whether whether = {whether}/>
                <Locations locations={props.locations} from={"forecast"}/>
                <button onClick={clickHandler} className="btn btn-primary">Show Forecast</button>
            </div>
        </div>
    );
}

//----------------------------------------------------------------------------------------------------------------------