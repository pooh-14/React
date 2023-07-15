import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [single, setSingle] = useState({});
  const {id} = useParams();
  // console.log(products,"-products")

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    useEffect(() => {
      if(id && products.length){
        const result = products.find((product) => product.id == id);
        // console.log(result, "-result")
        setSingle(result)
      }
    },[id , products])

    console.log(single, "-singleproduct");

  return (
    <div style={{display:"flex", justifyContent: "space-evenly", width:"80%", margin:"auto"}}>
      <div style={{width:"35%", height:"500px", border:"5px solid yellowgreen "}}>
        <img style={{width:"100%", height:"100%"}} src={single.image}/>
      </div>
      <div style={{width:"50%", height:"600px", border:"5px solid blue", padding:"15px"}}>
       <h1>Name :{single.title}</h1>
       <h2>Price : {single.price}$</h2>
       <p style={{fontSize:"20px",}}>Description : {single.description}</p>
      </div>
    </div>
  )
}

export default Products