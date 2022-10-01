//----------------------------------------------------------------------------------------------------------------------

/**
 * Basic component that responsible for Showing a responsive logo for my website.
 * @returns {JSX.Element}
 * @constructor
 */
export default function Logo(){
    return(
        <nav className="navbar navbar-light bg-light fluid">
            <div className="container-fluid">
                <div className="navbar-brand-fluid">
                    <img src="../WeathercastIcon.png" alt=""  className="d-inline-block align-text-top"/>
                    My Weather Forecast
                </div>
            </div>
        </nav>
    );
}

//----------------------------------------------------------------------------------------------------------------------