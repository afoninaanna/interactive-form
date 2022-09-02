import './style.css';
function Step (props) {
    return(
        <div className={props.className}>
            {props.number}
        </div>
    );
}
export default Step;