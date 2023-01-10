import { useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = ({item,cart}) => {
  const [amount,setAmount] = useState(0)
  console.log(cart)
  const addToCart = (e) => {
    e.preventDefault()
    console.log(`Added ${item.name} to cart, theres now ${amount+1} of em`)
    setAmount(amount+1)
  }
  const removeFromCart = (e) => {
    e.preventDefault()
    console.log(`removed 1 ${item.name} to cart, theres now ${amount-1} of em`)
    setAmount(amount-1)
  }

  if(amount > 0) {
    return (
      <Card className='text-center col-md-3 m-3'>
        <Card.Body>
          <Card.Title >{item.name}</Card.Title>
          <Card.Text>
            Text or image here
          </Card.Text>
          <ButtonGroup>
            <Button onClick={removeFromCart} variant="primary">-</Button>
            <Button disabled>{amount}</Button>
            <Button onClick={addToCart} variant="primary">+</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    )
  }else {
    return (
      <Card className='text-center col-md-3 m-3'>
        <Card.Body>
          <Card.Title >{item.name}</Card.Title>
          <Card.Text>
            Text or image here
          </Card.Text>
          <Button onClick={addToCart} variant="primary">Add</Button>
        </Card.Body>
      </Card>
    )
  }

}

export default Product