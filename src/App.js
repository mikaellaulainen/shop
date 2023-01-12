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
    //Adding to carts total sum item price
    setCartTotal(cartTotal+Number(item.price))
    //if item already in cart, update amount of it in there
    if(cart.some(i => i.id === item.id)){
      const index = cart.findIndex((i => i.id === item.id))
      const newCart = cart
      newCart[index].amount=amount
      setCart(newCart)
    }else { //if item not in cart cart, build new item.
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
    //adjust carts total sum by removing item price from there
    setCartTotal(cartTotal-item.price)
    //finding index of item we want to remove from
    const index = cart.findIndex((i => i.id === item.id))
    const newCart = cart
    //amount of this product in cart is zero, remove it from cart
    if(amount === 0){
      newCart.pop(index)
      setCart(newCart)
    }else { //if amount in cart is more than 0, remove only 1 item
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
          <Route path='summary' element={<Summary cart={cart} cartTotal={cartTotal}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App