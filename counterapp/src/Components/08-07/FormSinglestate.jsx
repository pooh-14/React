import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FormSingleState = () => {

    const [userData, setUserData] = useState ({ name: "", email: "", password: "" })

    const router = useNavigate();

    function handleChange(event) {
        setUserData({ ...userData, [event.target.name]: event.target.value }); 
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!userData.name) return alert("Name is required!")
        if (!userData.email) return alert("Email is required!")
        if (!userData.password) return alert("Password is required!")
        if (userData.password.length < 8) return alert("Password length must be 8 digit and more...")


        setUserData({ name: "", email: "", password: "" })
        alert("Registeration Successfull...")
        router('/');
    }

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
        <form onSubmit={handleSubmit}>
            <fieldset style={{width:"200px", textAlign: 'centre' }}>
            <legend>Fill your Details</legend>
            <label>Name:</label><br/>
            <input  type='text' value={userData.name} name="name" onChange={handleChange}/><br/>
            <label>Email:</label><br/>
            <input  type='email' value={userData.email} name="email" onChange={handleChange}/><br/>
            <label>Password:</label><br/>
            <input type='password' value={userData.password} name='password' onChange={handleChange}/><br/>
            <input type='submit' value='Register'/>
            </fieldset>
        </form>
    </div>
  )
}

export default FormSingleState