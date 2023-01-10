import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import productService from '../services/getProducts'

const Products = ({cart, addTo}) => {
  const [items,setItems] = useState([])

  useEffect(() => {
    productService.getAll().then(res => {
      console.log("Getting")
      setItems(res.data)
    })
  }, [])

  return (
    <>
    {items.map(item => (
      <Product key={item.id} item={item} cart={cart} addTo={addTo}/>
    ))}
    </>
  )
}

export default Products