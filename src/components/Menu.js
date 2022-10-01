//----------------------------------------------------------------------------------------------------------------------

import {Link} from "react-router-dom"

//----------------------------------------------------------------------------------------------------------------------

/**
 * This function creates a menu.
 * @returns {JSX.Element}
 * @constructor
 */
export default function Menu(){
    return(
        <div>
            <nav className="navbar navbar-light bg-light">
                <form className="container-fluid justify-content-start">
                    <Link to="/Forecast">
                        <button className="btn btn-outline-primary me-2" type="button">Forecast</button>
                    </Link>
                    <Link to="/AddLocation">
                        <button className="btn btn-outline-primary me-2" type="button">Locations</button>
                    </Link>
                    <img src="../../public/WeathercastIcon2.png" alt=""/>
                </form>
            </nav>
        </div>
    );
}

//----------------------------------------------------------------------------------------------------------------------