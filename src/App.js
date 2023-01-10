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
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='products' element={<Products cart={cart}/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='cart' element={<Cart cart={cart}/>}/>
          <Route path='checkout' element={<Checkout/>}/>
          <Route path='summary' element={<Summary/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App