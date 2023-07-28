import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./CONTEXT/AuthContext";

const PracticeNavbar = () => {
  const [userData, setUserData] = useState();
  const { state, Logout } = useContext(AuthContext);
  useEffect(() => {
    if (state) {
      setUserData(state.user);
    }
  }, [state]);

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
        <div>E-Com WEB</div>
        <div
          style={{
            display: "flex",
            width: "80%",
            justifyContent: "right",
            alignItems: "center",
          }}
        >
          <>
            <div style={{ marginLeft: "40px" }}>All Products</div>
            {userData?.role == "Seller" && (
              <div style={{ marginLeft: "40px" }}>Add Products</div>
            )}
            {userData?.role == "Seller" && (
              <div style={{ marginLeft: "40px" }}>Add Product</div>
            )}

            {userData?.name && (
              <div style={{ marginLeft: "40px" }}>Profile</div>
            )}
    
            {userData?.name ? (
              <div onClick={Logout} style={{ marginLeft: "40px" }}>
                Logout
              </div>
            ) : (
              <div style={{ marginLeft: "40px" }}>Login/Regsiter</div>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default PracticeNavbar;
