import './Button.css';

function Button({ clickFunc }) {
    return (
        <button className='Button' onClick={clickFunc}>
        Re-Roll Dice
    </button>
    );
}

export default Button;