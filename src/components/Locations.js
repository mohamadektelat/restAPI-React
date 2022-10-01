//----------------------------------------------------------------------------------------------------------------------

import DynamicComponent from "./DynamicComponent";

//----------------------------------------------------------------------------------------------------------------------

/**
 * This components creates the locations list.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function Locations(props){
    /**
     * This function handles the click on specific location to show his details.
     * @param e
     */
    const clickHandler = e =>{
        let elements = document.getElementsByClassName("cardToHide")
        for(let element of elements){
            element.style.display = "none";
        }
        document.getElementById(e).style.display = "block";
    };

    //------------------------------------------------------------------------------------------------------------------

    /**
     * This function handles the delete of specific element from the list.
     * @param e
     */
    const deleteHandler = (e) =>{
        props.setLocations(props.locations.filter(el => el.name !== e))
    };

    //------------------------------------------------------------------------------------------------------------------

    return(
        <div className="card" >
            <div className="card-body">
                <div className="list-group">
                    <h3>Locations:</h3>
                    {props.locations.length === 0? <p>(no locations yet..)</p> : props.locations.map(location =>
                        [<nav className="navbar navbar-light bg-light">
                            <div className="container-fluid">
                                {props.from === "forecast"? <button className="btn btn-light" type="button"
                                                                    onClick={()=>clickHandler(location.name)}>
                                    {location.name}</button> : <p>{location.name}</p>}

                                {props.from === "forecast"? null : <button onClick={()=>deleteHandler(location.name)}
                                                                           className="trash-btn">
                                    <i className="fas fa-trash"></i></button>}
                            </div>
                        </nav>,
                        <DynamicComponent blog={location}/>])}
                </div>
            </div>
        </div>
    );
}

//----------------------------------------------------------------------------------------------------------------------

