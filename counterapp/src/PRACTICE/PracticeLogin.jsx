import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./CONTEXT/AuthContext";

const PracticeLogin = () => {
  const { state, Login } = useContext(AuthContext);
    const [userData, setUserData] = useState({ email: "", password: "",role:"" })
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            var flag = false;
            const allUsers = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == userData.email && allUsers[i].password == userData.password) {
                    localStorage.setItem("Current-user", JSON.stringify(allUsers[i]))
                    Login(allUsers[i]);
                    setUserData({ email: "", password: "",role:"", })
                    alert("Login Successfull.")
                    router('/practicehome')
                    flag = true;
                    break;
                }
            }
            if (flag == false) {
                alert("Please Check your email & password.")
            }

        } else {
            alert("Please fill the all fields.")
        }
    }

  function newUser() {
    router("/practiceregister");
  }

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <form onSubmit={handleSubmit}>
        <fieldset
          style={{
            width: "380px",
            marginTop: "50px",
            textAlign: "centre",
            backgroundImage:
              "linear-gradient(to bottom right, #ff9933, #ff1a1a)",
          }}
        >
          {/* <legend>Login</legend> */}
          <label>Email:</label>
          <br />
          <input
            style={{
              width: "380px",
              marginTop: "10px",
              height: "30px",
              marginBottom: "10px",
              textAlign: "centre",
            }}
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          <br />
          <label>Password:</label>
          <br />
          <input
            style={{
              width: "380px",
              marginTop: "10px",
              height: "30px",
              textAlign: "centre",
            }}
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <br />
          <input
            style={{
              marginLeft: "145px",
              marginTop: "15px",
              backgroundColor: " #ccff66",
              fontWeight: "700",
              border: "2px solid  #ccff66",
              //   color: "white",
              padding: "8px 35px",
              borderRadius: "20px",
            }}
            type="submit"
            value="Login"
          />
          <p style={{ marginLeft: "125px", color: "white" }} onClick={newUser}>
            <u>New user? Register</u>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default PracticeLogin;
