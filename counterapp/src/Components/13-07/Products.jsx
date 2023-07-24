import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Products = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [products, setProducts] = useState([]);
  const [single, setSingle] = useState({});
  const { id } = useParams();
  const router = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  useEffect(() => {
    if (id && products.length) {
      const result = products.find(product => product.id === parseInt(id));
      setSingle(result);
    }
  }, [id, products]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Current-user"));
    console.log(user, "uzer");
    if (user) {
      setIsUserLoggedIn(true);
      setCurrentUserEmail(user.email);
    }
  }, []);

  function addCart() {
    if (isUserLoggedIn) {
      const users = JSON.parse(localStorage.getItem("Users"));
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === currentUserEmail) {
          users[i].cart.push(single);
          localStorage.setItem("Users", JSON.stringify(users));
          break;
        }
      }
      alert("Product successfully added to cart!")
            router('/productsfrombackend')
    } else {
      alert("You can't add a product before logging in!");
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", width: "60%", margin: "auto" , marginTop:"50px",border:"1px solid black"}}>
      <div style={{ width: "22%", height: "300px", }}>
        <img style={{ width: "100%", height: "100%",marginTop:"40px", }} src={single.image} alt="Product" />
      </div>
      <div style={{ width: "60%", height: "400px",  padding: "15px" }}>
        <h2>Name: {single.title}</h2>
        <h2>Price: {single.price}$</h2>
        <p style={{ fontSize: "17px" }}>Description: {single.description}</p>
        <button
          style={{
            height: "45px",
            width: "150px",
            border: "1px solid purple",
            backgroundColor: "purple",
            color: "white",
            fontWeight:"700",
            marginLeft: "30%",
            fontSize: "17px",
            borderRadius:"50px"
          }}
          onClick={addCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Products;