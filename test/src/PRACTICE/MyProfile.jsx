import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./CONTEXT/AuthContext";
import { toast } from "react-hot-toast";

const Profile = () => {
    const { Login } = useContext(AuthContext)

    const [userData, setUserData] = useState({});
    const router = useNavigate()

    console.log(userData, "userData")

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("Current-user"));
        if (!currentUser) {
            router("/login")
        }
        const allUsers = JSON.parse(localStorage.getItem("Users"));
        if (currentUser && allUsers) {
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == currentUser.email && allUsers[i].password == currentUser.password) {
                    setUserData(allUsers[i])
                }
            }
        }
    }, [])

    function handleChange(event) {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem("Current-user"));
        const allUsers = JSON.parse(localStorage.getItem("Users"));
        for (var i = 0; i < allUsers.length; i++) {
            if (allUsers[i].email == currentUser.email && allUsers[i].password == currentUser.password) {
                allUsers[i].name = userData.name;
                allUsers[i].password = userData.password;
                currentUser.password = userData.password;
                currentUser.name = userData.name;
            }
        }
        Login(currentUser)
        localStorage.setItem("Current-user", JSON.stringify(currentUser))
        localStorage.setItem("Users", JSON.stringify(allUsers))
        setUserData({})
        toast.success("Profile updated.")
    }

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <form onSubmit={handleSubmit}>
          <fieldset
            style={{
              width: "380px",
              marginTop: "50px",
              textAlign: "center",
              backgroundImage:
                "linear-gradient(to bottom right,  #ff9933, #ff1a1a)",
            }}
          >
            <label>Change Name:</label>
            <br />
            <input
              style={{
                width: "380px",
                marginTop: "10px",
                height: "30px",
                marginBottom: "10px",
                textAlign: "center",
              }}
              type="text"
              value={userData.name}
              name="name"
              onChange={handleChange}
            />
            <br />

            <label>Change Password:</label>
            <br />
            <input
              style={{
                width: "380px",
                marginTop: "10px",
                height: "30px",
                textAlign: "center",
              }}
              type="text"
              value={userData.password}
              name="password"
              onChange={handleChange}
            />
            <br />

            <input
              style={{
                marginLeft: "1px",
                marginTop: "15px",
                backgroundColor: " #ccff66",
                fontWeight: "700",
                border: "2px solid  #ccff66",
                // color: "white",
                padding: "8px 35px",
                borderRadius: "20px",
              }}
              type="submit"
              value="Update"
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Profile;
