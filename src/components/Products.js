import React, { useEffect, useState } from 'react'
import productService from '../services/getProducts'

const Products = () => {
  const [items,setItems] = useState([])

  useEffect(() => {
    productService.getAll().then(res => {
      console.log("Getting")
      setItems(res.data)
    })
  }, [])

  return (
    <div>Products</div>
  )
}

export default Products