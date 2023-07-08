import { useState } from "react"

const FormOne = () => {
const[name, setName] = useState("")
const[email, setEmail] = useState("")
const[password, setPassword] = useState("")

console.log(name,"-name")
console.log(email,"-email")
console.log(password,"-password")

function toSetName(event){
    setName(event.target.value);   
}

function toSetEmail(event){
    setEmail(event.target.value);   
}

function toSetPassword(event){
    setPassword(event.target.value);   
}

function submitData(event){
    event.preventDefault();

    if(!name){
        return alert("Name is required!")
    }

    if(name.length < 6){
        return alert("Name must include more than 6 letters!")
    }

    if(!email){
        return alert("Email is required!")
    }

    if(!password){
        return alert("Password is required!")
    }

    if(password.length < 6){
        return alert("Password must include more than 6 letters/numbers!")
    }

    alert("Registration Complete!")
}

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
        <form onSubmit={submitData}>
            <fieldset style={{width:"200px", textAlign: 'centre' }}>
            <legend>Fill your Details</legend>
            <label>Name:</label><br/>
            <input onChange={toSetName} type='text' placeholder='Type your name'/><br/>
            <label>Email:</label><br/>
            <input onChange={toSetEmail} type='email' placeholder='Type your email'/><br/>
            <label>Password:</label><br/>
            <input onChange={toSetPassword} type='password' placeholder='Type your password'/><br/>
            <input type='submit' value='Register'/>
            </fieldset>
        </form>
    </div>
  )
}

export default FormOne