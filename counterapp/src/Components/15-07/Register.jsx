import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const[userData,setUserData] = useState({name:"", email:"", password:""});
    
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(userData.name && userData.email && userData.password){
            const array = JSON.parse(localStorage.getItem("Users")) || [];
            const userDataObj = {
                 name:userData.name ,
                 email:userData.email ,
                 password:userData.password,
                 cart : []
                };
            array.push(userDataObj);
            localStorage.setItem("Users", JSON.stringify(array));
            alert("Registeration Successfull..")
            router('/log')
        }else {
            alert("Please fill all the details!")
    }
}



  return (
        
        <div style={{display:'flex', justifyContent:'center'}}>
        <form onSubmit={handleSubmit}>
            <fieldset style={{width:"380px",marginTop:"50px", textAlign: 'centre',backgroundImage: "linear-gradient(to bottom right, #8080ff, white)"}}>
            {/* <legend>Fill your Details</legend> */}
            <label>Name:</label><br/>
            <input style={{width:"380px",marginTop:"10px",height:"30px", marginBottom:"10px",textAlign: 'centre' }} type='text' name='name' onChange={handleChange}/><br/>
            <label>Email:</label><br/>
            <input style={{width:"380px",marginTop:"10px",height:"30px", marginBottom:"10px",textAlign: 'centre' }} type='email' name='email' onChange={handleChange}/><br/>
            <label>Password:</label><br/>
            <input style={{width:"380px",marginTop:"10px",height:"30px", marginBottom:"10px",textAlign: 'centre' }}type='password' name='password' onChange={handleChange}/><br/>
            <input style={{marginLeft:"130px", marginTop:"15px", backgroundColor:"#ff471a",fontWeight:"700",
             border:"2px solid #ff3300", color:"white",padding:"8px 35px", borderRadius:"20px"}}type='submit' value='Register'/>
             <p style={{marginLeft:"80px",color:"blue"}} onClick={()=>router('/log')} ><u>Already have an account?Login</u></p>
            </fieldset>
        </form>
    </div>
  )
}

export default Register