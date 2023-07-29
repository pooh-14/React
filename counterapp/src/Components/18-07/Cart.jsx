import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [finalprice, setFinalPrice] = useState(0);
  const [userCart, setUserCart] = useState([]);
  const router = useNavigate();

  // console.log(userCart, "- userCart");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Current-user"));
    if (user?.email) {
      const allUsers = JSON.parse(localStorage.getItem("Users"));
      for (var i = 0; i < allUsers.length; i++) {
        if (
          allUsers[i].email == user.email &&
          allUsers[i].password == user.password
        ) {
          setUserCart(allUsers[i].cart);
          break;
        }
      }
    } else {
      alert("Please login to watch all cart products.");
      router("/log");
    }
  }, []);

  useEffect(() => {
    if (userCart.length) {
      let totalPrice = 0;
      for (let i = 0; i < userCart.length; i++) {
        totalPrice += userCart[i].price;
      }
      setFinalPrice(totalPrice);
    }
  }, [userCart]);

  function checkout(){
    const user = JSON.parse(localStorage.getItem("Current-user"));
    if (user?.email) {
      const allUsers = JSON.parse(localStorage.getItem("Users"));
      for (var i = 0; i < allUsers.length; i++) {
        if (
          allUsers[i].email == user.email &&
          allUsers[i].password == user.password
        ) {
          allUsers[i].cart=[];
          break;
        }
      }
      localStorage.setItem("Users",JSON.stringify(allUsers))
    }
    setFinalPrice([]);  
    setUserCart([]);
    alert("Your products will be delivered soon. Thankyou for shopping!")
  }

  return (
    <div>
      <h1>Cart</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            width: "72%",
            border: "1px solid black",
          }}
        >
          {userCart &&
            userCart.map((pro) => (
              <div
                style={{
                  width: "17%",
                  height: "400px",
                  border: "1px solid grey",
                  padding: "30px",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              >
                <img
                  style={{ width: "100%", height: "200px" }}
                  src={pro.image}
                />
                <h3>Title : {pro.title}</h3>
                <h4>Price : {pro.price}</h4>
              </div>
            ))}
        </div>
        <div
          style={{ width: "25%", height: "300px", border: "1px solid black" }}
        >
          <h2 style={{ marginLeft: "20px" }}>Price Details</h2>
          <h3 style={{ marginLeft: "20px" }}>
            Total MRP : {finalprice + finalprice} $
          </h3>
          <h3 style={{ marginLeft: "20px" }}>
            Total MRP after discount : {finalprice} $
          </h3>
          <button
            style={{
              height: "45px",
              width: "200px",
              border: "1px solid green",
              backgroundColor: "green",
              color: "white",
              fontWeight: "700",
              marginLeft: "23%",
              fontSize: "17px",
              marginTop:"30px"
            }}
            onClick={checkout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
