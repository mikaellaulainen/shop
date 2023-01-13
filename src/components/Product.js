import { useState } from 'react'
import { ButtonGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Product = ({ item,cart,remove,addTo }) => {
  //Checking if this product is already in cart, if not amount = 0
  const [amount,setAmount] = useState(cart[cart.findIndex((i => i.id === item.id))] === undefined ? 0 : cart[cart.findIndex((i => i.id === item.id))].amount)

  // addign item to cart setting amount 1 larger
  const addToCart = (e) => {
    e.preventDefault()
    console.log(`Added ${item.name} to cart, theres now ${amount+1} of em`)
    setAmount(amount+1)
    addTo(item,amount+1)
  }
  //removing item from cart and setting 1 smaller
  const removeFromCart = (e) => {
    e.preventDefault()
    console.log(`removed 1 ${item.name} to cart, theres now ${amount-1} of em`)
    remove(item,amount-1)
    setAmount(amount-1)
  }
  //when this products is in cart we use this
  if(amount > 0) {
    return (
      <Card className='text-center m-3 col-10 col-sm-9 col-md-4 col-lg-2'>
        <Card.Body>
          <Card.Title >{item.name}</Card.Title>
          <Card.Text>
            Text or image here
          </Card.Text>
          <ButtonGroup>
            <Button className='product-btn' onClick={removeFromCart} variant="dark">-</Button>
            <Button className='product-btn' variant="dark" disabled>{amount}</Button>
            <Button className='product-btn' onClick={addToCart} variant="dark">+</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    )// if products is not in cart we use this
  }else {
    return (
      <Card className='text-center m-3 col-10 col-sm-9 col-md-4 col-lg-2'>
        <Card.Body>
          <Card.Title >{item.name}</Card.Title>
          <Card.Text>
            Text or image here
          </Card.Text>
          <Button className='product-btn'  onClick={addToCart} variant="dark">Add to cart</Button>
        </Card.Body>
      </Card>
    )
  }

}

export default Product