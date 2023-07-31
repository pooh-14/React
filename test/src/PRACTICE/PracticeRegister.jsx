import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PracticeRegister = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Buyer",
  });

  const router = useNavigate();

  console.log(userData, "userData");
  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userData.name && userData.email && userData.password) {
      const usersArray = JSON.parse(localStorage.getItem("Users")) || [];
      const userDataObj = {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        role: userData.role,
        cart: [],
      };
      usersArray.push(userDataObj);
      localStorage.setItem("Users", JSON.stringify(usersArray));
      setUserData({ name: "", email: "", password: "", role: "Buyer"});
      router("/practicelogin");
      alert("Registration Successfull.");
    } else {
      alert("Please fill the all fields.");
    }
  };

  function selectRole(event) {
    console.log(event.target.value, "- role");
    setUserData({ ...userData, ["role"]: event.target.value });
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
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
          {/* <legend>Fill your Details</legend> */}
          <label>Select Role :</label>

          <select
            style={{
              width: "380px",
              marginTop: "10px",
              height: "30px",
              marginBottom: "10px",
              textAlign: "centre",
            }}
            onChange={selectRole}
          >
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
          </select>
          <br />

          <label>Name:</label>
          <br />
          <input
            style={{
              width: "380px",
              marginTop: "10px",
              height: "30px",
              marginBottom: "10px",
              textAlign: "centre",
            }}
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
          <br />

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
              marginBottom: "10px",
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
              marginLeft: "130px",
              marginTop: "15px",
              backgroundColor: " #ccff66",
              fontWeight: "700",
              border: "2px solid  #ccff66",
              //   color: "white",
              padding: "8px 35px",
              borderRadius: "20px",
            }}
            type="submit"
            value="Register"
          />
          <p
            style={{ marginLeft: "80px", color: "white" }}
            onClick={() => router("/practicelogin")}
          >
            <u>Already have an account?Login</u>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default PracticeRegister;