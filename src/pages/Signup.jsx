import React, {useState} from 'react';
import '../styles/Signup.css';
function Signup() {
    const [fullname, setFullname] = useState("")
    const [email, setEmail]  = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    function handleFullnameOnChange(event) {
        setFullname(event.target.value)
    }
    function handleEmail(event) {
        setEmail(event.target.value)
    }
    function handlePasswordOnChange(event) {
        setPassword(event.target.value);
    }

    function handleConfirmPassword(event) {
        setConfirmPassword(event.target.value);
    }
    function loginUser(event) { 
        event.preventDefault();
        if (fullname === password) {
            alert("Welcome")
        } else {
            alert("Invalid credentials")
        }
    }
    return (
        <div className={"contact"}>

                   <h1>SIGN UP </h1>


            
            <div className={"txtb"} onSubmit={loginUser}>
            <label> FULL NAME</label>
                <input onChange={handleFullnameOnChange} value={fullname} type={"text"}
                       placeholder={"Enter your full name"}/>

        </div>   

               <div className={"txtb"} onSubmit={loginUser}> 
               <label> Email</label>       
                <input onChange={handleEmail} value={email} type={"text"}
                       placeholder={"Enter your email"}/>
                
            
                </div>

          
                <div className={"txtb"} onSubmit={loginUser}> 
               <label> Password</label>       
                <input onChange={handleConfirmPassword} value={confirmPassword} type={"password"}
                       placeholder={"Enter your password"}/>

                </div>


                <div className={"txtb"} onSubmit={loginUser}> 
               <label>Confirm Password</label>       
                <input onChange={handlePasswordOnChange} value={password} type={"password"}
                       placeholder={"Confirm password"}/>
                       </div>

                       <p class="send">SIGN UP</p>
                </div>


    
    )
}
export default Signup;