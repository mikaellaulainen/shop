import { useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = ({item,cart,remove,addTo}) => {
  const [amount,setAmount] = useState(cart[cart.findIndex((i => i.itemid === item.id))] === undefined ? 0 : cart[cart.findIndex((i => i.itemid === item.id))].amount)
  console.log(cart[cart.findIndex((i => i.itemid === item.id))] === undefined)
  if(cart.some(i => i.itemid === item.id)){
    console.log(cart[cart.findIndex((i => i.itemid === item.id))].amount)
  }
  const addToCart = (e) => {
    e.preventDefault()
    console.log(`Added ${item.name} to cart, theres now ${amount+1} of em`)
    setAmount(amount+1)
    addTo(item,amount+1)
  }
  const removeFromCart = (e) => {
    e.preventDefault()
    console.log(`removed 1 ${item.name} to cart, theres now ${amount-1} of em`)
    remove(item,amount-1)
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
          <Button onClick={addToCart} variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    )
  }

}

export default Product