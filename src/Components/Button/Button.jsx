import './style.css';
function Button(props) {
    return (
        <button className='Button' onClick={props.onClick}>
            Нет
        </button>
    );
}
export default Button;