import React, { useEffect, useState } from 'react'
import PracticeNavbar from './PracticeNavbar';

const AllProducts = () => {
    const [isProductsExist, setIsProductsExist] = useState(false);
    const [products, setProducts] = useState();

    console.log(products, " - products")

    useEffect(() => {
        const productsFromDb = JSON.parse(localStorage.getItem("Products"))
        if (productsFromDb) {
            setIsProductsExist(true);
            setProducts(productsFromDb)
        } else {
            setIsProductsExist(false)
        }
    }, [])
    return (
        <div>
            <PracticeNavbar/>
            {!isProductsExist ? <div style={{ width: "15%", margin: 'auto', marginTop:'300px', marginBottom:'300px' }}>
                <h1>No products!</h1>
                </div>
                :
                <div style={{ display: "flex", justifyContent: "space-around", marginTop:"20px" }}>
                    {products && products.map((pro) => (
                        <div style={{ width: "19%", border: "2px solid grey", padding:"5px", borderRadius:"10px" }} key={pro.name}>
                            <img style={{height:"350px", width:"100%"}} src={pro.image} />
                            <h3>Name : {pro.name}</h3>
                            <h4>Category :{pro.category}</h4>
                            <h4 style={{color:"green"}}>Price : {pro.price}$</h4>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default AllProducts