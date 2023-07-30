import '../styles/Button.css';

function Button( {text, isButtonClick, driveClick} ) {
    return (
        <button 
            className={isButtonClick ? "button-click" : "button-reset"}
            onClick={driveClick}>
            {text}
        </button>
    )
}

export default Button;