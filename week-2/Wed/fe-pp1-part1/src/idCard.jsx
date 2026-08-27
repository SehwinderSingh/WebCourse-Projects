//import myImg from '../assets/logo.png';
function IdCard (props) {
    return(
        <div className="IdCard">
            <p>
                <strong>First name:</strong>{props.firstName}<br/>
                <strong>Last name:</strong> {props.lastName} <br/>
                <strong>Gender:</strong>{props.gender}  <br/>
                <strong>Height:</strong> {props.height}<br/>
                <strong>Birth:</strong> {props.birth.toDateString()}<br/>
                <img src={props.picture} alt="This is an image" />
            </p>
        </div>
    );

}

export default IdCard;
