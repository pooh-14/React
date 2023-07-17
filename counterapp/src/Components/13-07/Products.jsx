import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [products, setProducts] = useState([]);
  const [single, setSingle] = useState({});
  const { id } = useParams();

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
    } else {
      alert("You can't add a product before logging in!");
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", width: "80%", margin: "auto" }}>
      <div style={{ width: "35%", height: "500px", border: "5px solid yellowgreen " }}>
        <img style={{ width: "100%", height: "100%" }} src={single.image} alt="Product" />
      </div>
      <div style={{ width: "50%", height: "600px", border: "5px solid blue", padding: "15px" }}>
        <h1>Name: {single.title}</h1>
        <h2>Price: {single.price}$</h2>
        <p style={{ fontSize: "20px" }}>Description: {single.description}</p>
        <button
          style={{
            height: "40px",
            width: "120px",
            border: "1px solid magenta",
            backgroundColor: "magenta",
            color: "white",
            marginLeft: "40%"
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