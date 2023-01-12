import React from 'react'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'

const Home = () => {
  return (
    <div className='home'>
      <h1 className='display-5 contact text-center'>Home</h1>
      <div className='home-container'>
        <p className='display-6 home-text ms-3'>Welcome to greatest drink shop in world! Our job is to bring you happiness everyday!</p>
        <LinkContainer to="products">
          <Button variant='dark' className='ms-3 btn-over-img'>To Shopping</Button>
        </LinkContainer>
      </div>
    </div>
  )
}

export default Home