import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Product from '../components/Product'
import productService from '../services/getProducts'

const Products = ({ cart, addTo,remove }) => {
  const [items,setItems] = useState([])

  useEffect(() => {
    productService.getAll().then(res => {
      console.log('Getting')
      setItems(res.data)
    })
  }, [])

  return (
    <>
      <p className='display-2 text-center my-2'>PRODUCTS</p>
      <Row xs={1} md={3} className="w-100 justify-content-center">
        {items.map(item => (
          <Product key={item.id} item={item} cart={cart} remove={remove} addTo={addTo}/>
        ))}
      </Row>
    </>
  )
}

export default Products