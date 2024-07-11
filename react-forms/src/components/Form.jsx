function Form(props) {

    return (
        <form className="form">
            
            <input id="username" type="text" placeholder="Username" autoComplete="username"/>
            <input id="password" type="password" placeholder="Password"/>
            {!props.isRegistered && (
                <input id="confirmPassword" type="password" placeholder="Confirm Password"/>
            )}
            
            <button type="submit">
                {props.isRegistered ? "Login" : "Register"}
            </button>
        </form>)
}

export default Form;