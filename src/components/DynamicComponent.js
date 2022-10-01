//----------------------------------------------------------------------------------------------------------------------

/**
 * Basic component that responsible for creating the description that shown in  forecast page for specific location.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function DynamicComponent(props){
    return(
        <div className="card cardToHide" style={{display: 'none'}} id={props.blog.name}>
            <div className="card-body">
                <p className="card-text">
                    <b>Location: </b>{props.blog.name} .<br/>
                    <b>Latitude: </b>{props.blog.latitude} .<br/>
                    <b>Longitude: </b>{props.blog.longitude} .<br/>
                </p>
            </div>
        </div>
    );
}

//----------------------------------------------------------------------------------------------------------------------