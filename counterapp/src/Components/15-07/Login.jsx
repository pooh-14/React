import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Auth.Context";

const Login = () => {
    const {state,login} = useContext(AuthContext);

    const [userData, setUserData] = useState({ email: "", password: "" })
    const router = useNavigate();
    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            const users = JSON.parse(localStorage.getItem("Users")); 

            var flag = false;
            for (var i = 0; i < users.length; i++) {
                if (users[i].email == userData.email && users[i].password == userData.password) {
                    flag = true; 
                    login(users[i])
                    alert("Login successfull.");
                    setUserData({ email: "", password: "" })
                    router('/');
                    break;
                }
            }

            if (flag == false) {
                return alert("Please check credentails.")
            }
            
        } else {
            alert("Please fill all the details! ")
        }
    }

    function newUser(){
        router('/register')
    }

    return (
       
        <div style={{display:'flex', justifyContent:'center',marginTop:"50px",}}>
        <form onSubmit={handleSubmit}>
            <fieldset style={{width:"380px",marginTop:"50px", textAlign: 'centre',backgroundImage: "linear-gradient(to bottom right, #8080ff, white)"}}>
            {/* <legend>Login</legend> */}
            <label>Email:</label><br/>
            <input style={{width:"380px",marginTop:"10px",height:"30px", marginBottom:"10px",textAlign: 'centre' }} type='email' name='email' onChange={handleChange}/><br/>
            <label>Password:</label><br/>
            <input style={{width:"380px",marginTop:"10px",height:"30px",  textAlign: 'centre' }} type='password' name='password' onChange={handleChange}/><br/>
            <input style={{marginLeft:"145px", marginTop:"15px", backgroundColor:"#ff471a",fontWeight:"700",
             border:"1px solid #ff3300", color:"white",padding:"8px 35px", borderRadius:"20px"}} type='submit' value='Login'/>
             <p style={{marginLeft:"125px",color:"blue"}} onClick={newUser} ><u>New user? Register</u></p>
            </fieldset>
        </form>
    </div>
    )
}

export default Login;