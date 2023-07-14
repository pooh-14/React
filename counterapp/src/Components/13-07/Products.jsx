import React from 'react'

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

  return (
    <div>Products</div>
  )
}

export default Products