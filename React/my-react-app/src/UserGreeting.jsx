
function UserGreeting(props) {

    /*
    if(props.isLoggedIn) {
        return <h2>Welcome {props.username}!</h2>
    }
    return <h2>Please log in to continue</h2>
    */

    const welcomMessage = <h2 className="welcome-message">
                            Welcome {props.username}!
                          </h2>;
    const loginPrompt = <h2 className="login-prompt">
                            Please log in to continue
                        </h2>


    return(props.isLoggedIn) ? welcomMessage : loginPrompt;
}

export default UserGreeting