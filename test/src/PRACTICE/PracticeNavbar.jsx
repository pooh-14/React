import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./CONTEXT/AuthContext";
import { useNavigate } from "react-router-dom";

const PracticeNavbar = () => {

  const [userData, setUserData] = useState();

  const { state, Logout } = useContext(AuthContext);

  const router = useNavigate();

  useEffect(() => {
    const isUserPresent = JSON.parse(localStorage.getItem("Current-user"));
    if (state?.user){
        setUserData(state?.user)
    }else{
        setUserData({})
    }
},[state])


  return (
    <div>
      {/* <h1>This is navbar</h1> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          border: "5px solid black",
          width: "100%",
          textAlign: "center",
          height: "50px",
          alignItems: "center",
        }}
      >
        <div onClick={()=>router('/')}>E-Com WEB</div>
        <div
          style={{
            display: "flex",
            width: "80%",
            justifyContent: "right",
            alignItems: "center",
          }}
        >
          <>
            <div style={{ marginLeft: "40px" }} onClick={()=>router('/allproducts')}>All Products</div>

            {userData?.role =="Seller" && (
              <div style={{ marginLeft: "40px" }} onClick={()=>router('/addproducts')}>Add Products</div>
            )}
            
            {userData?.name && (
              <div style={{ marginLeft: "40px" }} onClick={()=>router('/myprofile')}>Profile - {userData?.name}</div>
            )}

            {userData?.role =="Buyer" && (
              <div style={{ marginLeft: "40px" }} onClick={()=>router('/cart')}>Cart</div>
            )}
    
            {userData?.name ? (
              <div onClick={Logout} style={{ marginLeft: "40px" }}>
                Logout
              </div>
            ) : (
              <div style={{ marginLeft: "40px" }} onClick={()=>router('/practiceregister')}>Login/Regsiter</div>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default PracticeNavbar;