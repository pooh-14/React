import React from "react"
import myData from './../../data/myProducts.json'

const DeclarativeWay=() => {
    return(
        <div>
           {myData.map((product) => (
                <div>
                    <h1> Name :  {product.name}</h1>
                    <h2>Description :{product.description}</h2>
                    <h2>Price : {product.price} Rs.</h2>
                </div>
            ))}
        </div>
    )
}
export default DeclarativeWay