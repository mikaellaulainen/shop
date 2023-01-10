import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import productService from '../services/getProducts'

const Products = ({cart}) => {
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
      <Product key={item.id} item={item} cart={cart}/>
    ))}
    </>
  )
}

export default Products