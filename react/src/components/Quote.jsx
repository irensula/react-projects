import axios from "axios";
import React from "react";
 
class Quote extends React.Component {
    state = { advice: "" };
 
    componentDidMount() {
        this.fetchAdvice();
    }
 
    fetchAdvice = () => {
        axios
            .get("https://api.adviceslip.com/advice")
            .then((response) => {
                const { advice } = response.data.slip;
 
                this.setState({ advice });
            })
 
            .catch((error) => {
                console.log(error);
            });
    };
 
    render() {
        const { advice } = this.state;
 
        return (
                <div className="quote">
                    <p>{this.state.advice}</p>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>Give Me Advice</span>
                    </button>
                </div>
        );
    }
}
 
export default Quote;