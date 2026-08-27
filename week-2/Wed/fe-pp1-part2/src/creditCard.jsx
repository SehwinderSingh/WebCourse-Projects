import visa from "./assets/images/visa.png";
import masterCard from "./assets/images/master.png";

function CreditCard(props) {
    const cardStyle = {
        backgroundColor: props.bgColor,
        color: props.color,
    };

    const cardLogo = props.type === "Visa" ? visa : masterCard;
    const lastDigits = props.number.slice(-4);

    return(
        <div className="CreditCard">
            <img className="card-logo" src={cardLogo}/>
            <p className="card-number">123456781234 {lastDigits}</p>
            <p>
                Expires {props.expirationMonth}/{props.expirationYear} | {props.bank}

            </p>
        </div>
    );
}

export default CreditCard;
