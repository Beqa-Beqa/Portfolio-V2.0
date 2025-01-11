import './FancyButton.css';

const FancyButton = (props: {
    text: string
}) => {
    return (
        <a className="fancy" href="#">
            <span className="top-key"></span>
            <span className="text">{props.text}</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
        </a>
    );
}
 
export default FancyButton;