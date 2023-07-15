import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProductsFromBackend = () => {

    const [products, setProducts] = useState([]);
    const router = useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    const redirect = (id) => {
        console.log(id, "-id");
        router(`/products/${id}`)
    }

    return (
        <div>
            <h1>Products : </h1>

            {products.length ?
                <div  style={{cursor:"pointer", display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {products.map((pro) => (
                        <div onClick={() => redirect(pro.id)} style={{ width: "18%", border: "2px solid black", height: '450px', marginBottom: "30px" }}>

                            <img style={{ width: "80%", height: "260px", marginLeft: "10%", marginTop: "25px" }} src={pro.image} />

                            <h4 style={{ marginLeft: "20px" }} >Name : {pro.title}</h4 >

                            <h3 style={{ marginLeft: "20px" }}>Price : Rs. {pro.price}</h3>
                        </div>
                    ))}
                </div>
                :
                <h1 style={{ width: "10%", margin: 'auto', marginTop:'200px', marginBottom:'300px', color:"purple" }}>Loading...</h1>
            }


        </div>
    )
}

export default ProductsFromBackend