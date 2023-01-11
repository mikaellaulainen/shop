import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import About from './pages/About'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Summary from './pages/Summary'

const App = () => {
  const [cart,setCart]= useState([])
  const [cartTotal,setCartTotal] = useState(0)

  const addTo = (item,amount) => {
    setCartTotal(cartTotal+Number(item.price))
    if(cart.some(i => i.id === item.id)){
      const index = cart.findIndex((i => i.id === item.id))
      const newCart = cart
      newCart[index].amount=amount
      setCart(newCart)
    }else {
      const cartItem = {
        price:item.price,
        name: item.name,
        id: item.id,
        amount:amount
      }
      setCart(cart.concat(cartItem))
    }
  }
  const remove = (item,amount) => {
    setCartTotal(cartTotal-item.price)
    console.log(item)
    const index = cart.findIndex((i => i.id === item.id))
    const newCart = cart
    if(amount === 0){
      newCart.pop(index)
      setCart(newCart)
    }else {
      newCart[index].amount=amount
      console.log(amount)
      console.log(newCart)
      setCart(newCart)
    }
  }

  const shopper = (e) => {
    e.preventDefault()
    console.log('we done')
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='products' element={<Products cart={cart} remove={remove} addTo={addTo}/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='cart' element={<Cart cart={cart} cartTotal={cartTotal}/>}/>
          <Route path='checkout' element={<Checkout shopper={shopper}/>}/>
          <Route path='summary' element={<Summary/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App