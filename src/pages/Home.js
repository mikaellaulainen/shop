import React from 'react'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'

const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <p className='home-text ms-3'>Welcome to greatest drink shop in world! Our job is to bring you happiness everyday! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa distinctio quo cumque deserunt possimus rerum inventore alias velit est. Doloribus unde temporibus aliquid sit autem, aspernatur quibusdam consequuntur voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consectetur veritatis repellat laboriosam deserunt ad modi tempora sint temporibus nam, vel obcaecati porro in eveniet, quidem, fugiat sed a dolor.</p>
        <LinkContainer to="products">
          <Button className='btn-over-img'>To Shopping</Button>
        </LinkContainer>
      </div>
    </div>
  )
}

export default Home