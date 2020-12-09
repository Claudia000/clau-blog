import React, {useState} from 'react';
import '../styles/Login.css';
function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    function handleUsernameOnChange(event) {
        setUsername(event.target.value)
    }
    function handlePasswordOnChange(event) {
        setPassword(event.target.value);
    }
    function loginUser(event) { 
        event.preventDefault();
        if (username === password) {
            alert("Welcome")
        } else {
            alert("Invalid credentials")
        }
    }
    return (
        <div className={"contact"}>
            <h1>LOG IN</h1>
            <div className={"txtb"} onSubmit={loginUser}>
            <label> EMAIL:</label>
                <input onChange={handleUsernameOnChange} value={username} type={"text"}
                       placeholder={"Enter your email"}/>

        </div>   

               <div className={"txtb"} onSubmit={loginUser}> 
               <label> PASSWORD:</label>       
                <input onChange={handlePasswordOnChange} value={password} type={"password"}
                       placeholder={"Enter your password"}/>

                </div>
                <p class="send">LOG IN</p>
                <h2>  <a href="Signup"> Don't have an account? click here to sign up </a></h2>
                </div>
                    
           
    )
}
export default Login;
