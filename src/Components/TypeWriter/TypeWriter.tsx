import './TypeWriter.css';

const TypeWriter = (props: {
    text: string,
    specialFont?: boolean
}) => {
    return (
        <div className="typewriter-container">
            <p className={`typed ${props.specialFont && 'special-font'}`}>{props.text}</p>
        </div>
    );
}
 
export default TypeWriter;