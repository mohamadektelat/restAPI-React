//----------------------------------------------------------------------------------------------------------------------

import {useEffect, useState} from "react";
import Locations from "./Locations";

//----------------------------------------------------------------------------------------------------------------------

const errorMessages = [
    "Name is required.",
    "Latitude is required.",
    "Longitude is required.",
    "You cant choose the same location.",
    "Name must contain regular characters only.",
    "Value must be a decimal number: only digits, a singe minus and a single dot are allowed.",
    "Value must be a decimal between -90.0 and 90.0, and not equals 0.",
    "Value must be a decimal between -180.0 and 180.0, and not equals 0.",
    "Value must be a decimal number: only digits, a singe minus and a single dot are allowed."];

const specialCharsTest = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
const numbersTest = /\d/;

//----------------------------------------------------------------------------------------------------------------------

export default function AddLocation(props){
    //This string contains the name that the user have typed.
    const [name , setName] = useState("");
    //This string contains the latitude that the user have typed.
    const [latitude, setLatitude] = useState("");
    //This string contains the longitude that the user have typed.
    const [longitude, setLongitude] = useState("");
    //This boolean is true if name is valid otherwise false.
    const [isValidName, setValidName] = useState(false);
    //This boolean is true if latitude is valid otherwise false.
    const [isValidLatitude, setValidLatitude] = useState(false);
    //This boolean is true if longitude is valid otherwise false.
    const [isValidLongitude, setValidLongitude] = useState(false);
    //This string contains the error message to show for name.
    const [nameErrorMessage, setNameErrorMessage] = useState("");
    //This string contains the error message to show for latitude.
    const [latitudeErrorMessage, setLatitudeErrorMessage] = useState("");
    //This string contains the error message to show for longitude.
    const [longitudeErrorMessage, setLongitudeErrorMessage] = useState("");

    //------------------------------------------------------------------------------------------------------------------

    /**
     * This function handle the name input from the user.
     * @param e
     */
    const nameHandler = e =>{
        setName(e.target.value);
    };

    //------------------------------------------------------------------------------------------------------------------

    /**
     * This function handle the latitude input from the user.
     * @param e
     */
    const latitudeHandler = e =>{
        setLatitude(e.target.value);
    };

    //------------------------------------------------------------------------------------------------------------------

    /**
     * This function handle the longitude input from the user.
     * @param e
     */
    const longitudeHandler = e =>{
        setLongitude(e.target.value);
    };

    //------------------------------------------------------------------------------------------------------------------

    /**
     * This function handle the submit button.
     * @param e
     */
    const submitHandler = e =>{
        e.preventDefault();
        if(isValidName && isValidLatitude && isValidLongitude) {
            props.setLocations([...props.locations , {name, latitude, longitude}])
            setName("");
            setLatitude("");
            setLongitude("");
        }
    };

    //------------------------------------------------------------------------------------------------------------------

    /**
     * This function is like an event listener to check when any change to name occur the function check if that valid
     * change then updates the variables and renders the page(hook validator).
     */
    useEffect(() =>{
        setName(name.trim());
        //To check if name is exists.
        for(let loc of props.locations){
            if(loc.name === name) {
                setValidName(false);
                setNameErrorMessage(errorMessages[3]);
                return;
            }
        }
        //To check if name contains a numbers.
        if(numbersTest.test(name) || specialCharsTest.test(name)) {
            setValidName(false);
            setNameErrorMessage(errorMessages[4]);
            return;
        }
        //To check is the name label is empty.
        if(name.length === 0){
            setValidName(false);
            setNameErrorMessage(errorMessages[0]);
            return;
        }
        setValidName(true);
    }, [name, props]);

    //------------------------------------------------------------------------------------------------------------------

    /**
     * This function is like an event listener to check when any change to latitude occur the function check if that valid
     * change then updates the variables and renders the page(hook validator).
     */
    useEffect(() =>{
        setLatitude(latitude.trim());
        //To check if the latitude label is empty.
        if(latitude === ''){
            setValidLatitude(false);
            setLatitudeErrorMessage(errorMessages[1]);
            return;
        }
        //To check if the latitude contains characters.
        if(isNaN(latitude)){
            setValidLatitude(false);
            setLatitudeErrorMessage(errorMessages[5])
            return
        }
        //To check if latitude is bigger than 90 or less that -90 or equals 0.
        if((latitude <= -90) || (latitude >= 90) || (latitude === "0")){
            setValidLatitude(false);
            setLatitudeErrorMessage(errorMessages[6])
            return;
        }
        setValidLatitude(true)
    }, [latitude]);

    //------------------------------------------------------------------------------------------------------------------

    /**
     * This function is like an event listener to check when any change to longitude occur the function check if that valid
     * change then updates the variables and renders the page(hook validator).
     */
    useEffect(() =>{
        setLongitude(longitude.trim());
        //To check if the longitude label is empty.
        if(longitude === ''){
            setValidLongitude(false);
            setLongitudeErrorMessage(errorMessages[2])
            return;
        }
        //To check if longitude is bigger than 180 or less that -180 or equals 0.
        if((longitude <= -180) || (longitude >= 180) || (longitude === "0")){
            setValidLongitude(false);
            setLongitudeErrorMessage(errorMessages[7])
            return;
        }
        //To check if the longitude contains characters.
        if(isNaN(longitude)){
            setValidLongitude(false);
            setLongitudeErrorMessage(errorMessages[8])
            return
        }
        setValidLongitude(true)
    }, [longitude]);

    //------------------------------------------------------------------------------------------------------------------

    return(
        <div>
            <Locations key={name} locations={props.locations} setLocations={props.setLocations} from={"addLocations"}/>
            <form>
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Add Location:</h5><br/>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Name:</label>
                            <input value={name} onChange={nameHandler} className="form-control"
                                   id="exampleFormControlInput1"/>
                            <p  style={{color:"red"}}>{isValidName ? '' : nameErrorMessage}</p>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Latitude:</label>
                            <input value={latitude} onChange={latitudeHandler} className="form-control"
                                   id="exampleFormControlInput1"/>
                            <p style={{color:"red"}}>{isValidLatitude ? '' : latitudeErrorMessage}</p>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Longitude:</label>
                            <input value={longitude} onChange={longitudeHandler} className="form-control"
                                   id="exampleFormControlInput1"/>
                            <p  style={{color:"red"}}>{isValidLongitude ? '' : longitudeErrorMessage}</p>
                        </div>

                        <button className="btn btn-primary" onClick={submitHandler}>Add Location</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

//----------------------------------------------------------------------------------------------------------------------