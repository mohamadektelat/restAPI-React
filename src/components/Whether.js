//----------------------------------------------------------------------------------------------------------------------

const weekday = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];

//----------------------------------------------------------------------------------------------------------------------

const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

//----------------------------------------------------------------------------------------------------------------------

const whether = {
    "clear":"Total cloud cover less than 20%",
    "lightrain":"Rain with Precipitation rate less than 4mm/hr with cloud cover more than 80%",
    "pcloudy":"Total cloud cover between 20%-60%",
    "mcloudy":"Total cloud cover between 20%-80%",
    "cloudy":"Total cloud cover over over 80%",
    "rain":"Rain with Precipitation rate over 4mm/hr",
    "snow":"Snow with Precipitation rate over 4mm/hr",
    "ts":"Lifted Index less than -5 with precipitation rate below 4mm/hr",
    "tsrain":"Lifted Index less than -5 with rain precipitation rate over 4mm/hr",
    "humid":"Relative humidity over 90% with total cloud cover less than 60%",
    "oshower":"Precipitation rate less than 4mm/hr with total cloud cover between 60%-80%",
    "ishower":"Precipitation rate less than 4mm/hr with total cloud cover less than 60%",
    "lightsnow":"Snow with Precipitation rate less than 4mm/hr",
    "rainsnow":"Precipitation type to be ice pellets or freezing rain"};

//----------------------------------------------------------------------------------------------------------------------

/**
 * Basic component that is responsible for building a 7 days forecast weather prediction.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function Whether(props){

    //------------------------------------------------------------------------------------------------------------------

    /**
     * This function returns gets number and returns tow digits string for the number.
     * @param num
     * @returns {string}
     */
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    //------------------------------------------------------------------------------------------------------------------

    /**
     * This function gets date and returns a string from that date in format "weekday month dayNumber year".
     * @param date
     * @returns {string}
     */
    function formatDate(date) {
        return [weekday[date.getDay()],[
            month[date.getMonth()],
            padTo2Digits(date.getDate()),
            date.getFullYear()
        ].join(' ')].join(' ');
    }

    //------------------------------------------------------------------------------------------------------------------

    return(
        <div id="whether">
            {props.whether.length === 0? null : props.whether.map(dayForecast => [
                    <div className="card" >
                        <div className="card-header">
                            <b>{formatDate(new Date(dayForecast.date.toString().slice(0,4)+ "-" +
                                dayForecast.date.toString().slice(4,6)+"-"+dayForecast.date.toString().slice(6,8)))}</b>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                <b>Whether:</b> {!whether.hasOwnProperty(dayForecast.weather)?
                                dayForecast.weather : whether[dayForecast.weather]}.<br/>
                                <b>Temperatures:</b> {dayForecast.temp2m.min}℃ to {dayForecast.temp2m.max}℃.<br/>
                                <b>Wind conditions:</b> {dayForecast.wind10m_max === 1?
                                "No Wind" : dayForecast.wind10m_max} m/s.<br/>
                            </p>
                        </div>
                    </div>])}
        </div>
    );
}

//----------------------------------------------------------------------------------------------------------------------