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
            <fieldset style={{width:"180px", textAlign: 'centre' }}>
            <legend>Fill your Details</legend>
            <label>Name:</label><br/>
            <input  type='text' name='name' onChange={handleChange}/><br/>
            <label>Email:</label><br/>
            <input  type='email' name='email' onChange={handleChange}/><br/>
            <label>Password:</label><br/>
            <input type='password' name='password' onChange={handleChange}/><br/>
            <input style={{marginLeft:"45px", marginTop:"15px", backgroundColor:"orange",
             border:"1px solid orange", color:"white",padding:"3px 15px", borderRadius:"20px"}} type='submit' value='Register'/>
            </fieldset>
        </form>
    </div>
  )
}

export default Register