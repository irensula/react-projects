function LuckyNumber() {
    const num = 9;
    const randomStyle = {
        color: "green",
        fontSize: "30px",
        border: "1px solid green"
      }
    return(
        <div>
            <p>Your lucky number is {num}.</p>
            <p style = { randomStyle }>And your lucky random number is {Math.floor(Math.random() * 10)}.</p>
        </div>
    )
}

export default LuckyNumber;