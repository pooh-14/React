import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [userData, setUserData] = useState({ email: "", password: "" })
    const router = useNavigate();
    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            const users = JSON.parse(localStorage.getItem("Users")); // accessed localstorage

            var flag = false;
            for (var i = 0; i < users.length; i++) {
                if (users[i].email == userData.email && users[i].password == userData.password) {
                    flag = true; 
                    break;
                }
            }

            if (flag == false) {
                return alert("Please check credentails.")
            }else{
                localStorage.setItem("Current-user", JSON.stringify(userData))
                alert("Login successfull.");
                setUserData({ email: "", password: "" })
                router('/');
            }
            

        } else {
            alert("Please fill all the details! ")
        }
    }

    return (
       
        <div style={{display:'flex', justifyContent:'center'}}>
        <form onSubmit={handleSubmit}>
            <fieldset style={{width:"180px", textAlign: 'centre' }}>
            <legend>Login</legend>
            <label>Email:</label><br/>
            <input  type='email' name='email' onChange={handleChange}/><br/>
            <label>Password:</label><br/>
            <input type='password' name='password' onChange={handleChange}/><br/>
            <input style={{marginLeft:"45px", marginTop:"15px", backgroundColor:"orange",
             border:"1px solid orange", color:"white",padding:"3px 15px", borderRadius:"20px"}} type='submit' value='Login'/>
            </fieldset>
        </form>
    </div>
    )
}

export default Login;