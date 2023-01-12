import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <>
      <Topbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout