import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import PracticeNavbar from './PracticeNavbar';

const AddProducts = () => {

    const [productData, setProductData] = useState({ name: "", price: "", image: "", category: "Other" });

    const router = useNavigate();

    const handleChange = (event) => {
        setProductData({ ...productData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (productData.name && productData.price && productData.image && productData.category) {
            const productsArray = JSON.parse(localStorage.getItem("Products")) || [];

            const randomId = uuidv4();
            productData["id"] = randomId;
            productsArray.push(productData);
            localStorage.setItem("Products", JSON.stringify(productsArray))
            setProductData({ name: "", price: "", image: "", category: "Other" })
            router('/allproducts');
            alert("Product added Successfully!")
        } else {
            alert("Please fill all the data!")
        }
    }

    function selectRole(event) {
        setProductData({ ...productData, ["category"]: event.target.value })
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("Current-user"))
        if (user) {
            if (user?.role == "Buyer") {
                alert("Access granted only to Seller.")
                router('/practicehome')
            }
        } else {
            alert("You are not a Logged in user.")
            router('/practicelogin')
        }
    }, [])
    
  return (
    <div>
        <PracticeNavbar/>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <fieldset
          style={{
            width: "380px",
            marginTop: "50px",
            textAlign: "centre",
            backgroundImage: "linear-gradient(to bottom right, #8000ff, #ff00ff)",
          }}
        >
          {/* <legend>Fill your Details</legend> */}
          <label>Product Name:</label>
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
            value={productData.name}
            onChange={handleChange}
          />
          <br />
          
          <label>Product Price :</label>
          <br />
          <input
            style={{
              width: "380px",
              marginTop: "10px",
              height: "30px",
              marginBottom: "10px",
              textAlign: "centre",
            }}
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
          />
          <br />
          <label>Product Category :</label><br />
                <select 
                style={{
                    width: "380px",
                    marginTop: "10px",
                    height: "30px",
                    marginBottom: "10px",
                    textAlign: "centre",
                  }}
                onChange={selectRole} >
                    <option value="Other">Other</option>
                    <option value="Mens">Mens</option>
                    <option value="Womens">Womens</option>
                    <option value="Kids">Kids</option>
                    <option value="Electronics">Electronics</option>
                </select><br />
          <label>Product Image :</label>
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
            name="image"
            value={productData.image}
            onChange={handleChange}
          />
          <br />
          <input
            style={{
              marginLeft: "130px",
              marginTop: "15px",
              backgroundColor: " black",
              fontWeight: "700",
              border: "2px solid  #ccff66",
              color: "white",
              padding: "8px 35px",
              borderRadius: "20px",
            }}
            type="submit"
            value="Add Product"
          />
        </fieldset>
      </form>
    </div>
    </div>
  )
}

export default AddProducts