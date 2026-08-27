function toHex(color) {
    const hex = color.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function BoxColor(props) {
    const boxStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
    };

    return (
        <div className="BoxColor">
            <p>#{toHex(props.r)}{toHex(props.g)}{toHex(props.b)}</p>
        </div>
    );
}

export default BoxColor;