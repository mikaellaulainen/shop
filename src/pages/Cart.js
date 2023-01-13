import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'


const Cart = ({ cart,cartTotal }) => {
  //When cart is empty
  if (cart.length === 0){
    return (
      <div className='cart text-center'>
        <p className='contact'>Shopping cart</p>
        <p>Theres no items in cart</p>
        <p>Add some items there to continue!</p>
        <LinkContainer to="/products">
          <Button variant="dark">Back to shopping!</Button>
        </LinkContainer>
      </div>
    )
  } else { //items in cart are shown
    return (
      <>
        <p className='contact text-center'>Shopping cart</p>
        <ListGroup>
          {cart.map(item => (
            <ListGroup.Item key={item.id} className="">{item.name} Amount: {item.amount}  total: {item.amount*item.price}€</ListGroup.Item>
          ))}
        </ListGroup>

        <p>Total: {cartTotal.toFixed(2)}€</p>
        <LinkContainer to="/checkout">
          <Button className="ms-3">Checkout</Button>
        </LinkContainer>
      </>
    )
  }
}

export default Cart