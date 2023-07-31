import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AllProducts = () => {
    const [isProductsExist, setIsProductsExist] = useState(false);
    const [products, setProducts] = useState();
    const router = useNavigate()

    // console.log(products, " - products")

    useEffect(() => {
        const productsFromDb = JSON.parse(localStorage.getItem("Products"))
        if (productsFromDb) {
            setIsProductsExist(true);
            setProducts(productsFromDb)
        } else {
            setIsProductsExist(false)
        }
    }, [])

    const redirect = (id) => {
        console.log(id, "-id");
        router(`/singleproduct/${id}`)
    }
    

    return (
        <div style={{width:"90%", margin:"auto"}}>
            {!isProductsExist ? <div style={{ width: "15%", margin: 'auto', marginTop:'300px', marginBottom:'300px' }}>
                <h1>No products!</h1>
                </div>
                :
                <div style={{ display: "flex", justifyContent: "space-around", marginTop:"20px", flexWrap:"wrap" }}>
                    {products && products.map((pro) => (
                        <div onClick={() => redirect(pro.id)} style={{ width: "220px",height: "390px", border: "2px solid #bec4c0", padding:"5px", borderRadius:"10px",marginBottom:"20px"}} key={pro.id}>
                            <img style={{height:"230px", width:"100%"}} src={pro.image} />
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