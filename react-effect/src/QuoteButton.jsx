import { useState } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

function QuoteButton() {
    const [quote, setQuote] = useState({});
    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote);
        }
    
    return (
        <div>
            <button onClick={fetchQuote}>Get Quote Using handler</button>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    );
}

export default QuoteButton;