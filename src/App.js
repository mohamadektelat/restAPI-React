//----------------------------------------------------------------------------------------------------------------------

import Logo from './components/ForecastLogo';
import Menu from "./components/Menu";
import AddLocation from "./components/AddLocation";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";
import ForecastPage from "./components/Forecast";

//----------------------------------------------------------------------------------------------------------------------

/**
 * The main function in the project it controls all the website.
 * @returns {JSX.Element}
 * @constructor
 */
export default function App() {
    //The list that contains the locations.
    const [locations , setLocations] = useState([]);

    //------------------------------------------------------------------------------------------------------------------

    return(
        <BrowserRouter>
            <div className="App">
                <Logo/>
                <Menu/>
                <Routes>
                    <Route path="/" exact element={<AddLocation locations={locations} setLocations={setLocations}/>}/>
                    <Route path="/AddLocation" element={<AddLocation locations={locations} setLocations={setLocations}/>}/>
                    <Route path="/Forecast" element={<ForecastPage locations={locations}/>}/>}
                </Routes>
            </div>
        </BrowserRouter>
      );
}

//----------------------------------------------------------------------------------------------------------------------
