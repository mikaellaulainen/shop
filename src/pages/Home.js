import React from 'react'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'

const Home = () => {
  return (
    <div className='home text-center'>
      <h1 className='display-1'>Shop</h1>
      <p className='display-6 ms-3 mt-3'>Welcome to greatest drink shop in world! Our job is to bring you happiness everyday!</p>
      <LinkContainer to="products">
        <Button variant='dark' size='lg' className='gbl-btn mt-5'>To Shopping 	&rarr;</Button>
      </LinkContainer>
    </div>
  )
}

export default Home