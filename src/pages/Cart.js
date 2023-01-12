import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'

const Cart = ({ cart,cartTotal }) => {
  if (cart.length === 0){
    return (
      <>
        <p className='contact text-center'>Shopping cart</p>
        <p>Theres no items in cart</p>
        <p>Add some items there to continue!</p>
        <LinkContainer to="/products">
          <Button>Back to shopping!</Button>
        </LinkContainer>
      </>
    )
  } else {
    return (
      <>
        <p className='contact text-center'>Shopping cart</p>
        {cart.map(item => (
          <p key={item.id} className="cart-item border m-3 p-3">{item.name} Amount: {item.amount}  total: {item.amount*item.price}€</p>
        ))}
        <p>Total: {cartTotal.toFixed(2)}€</p>
        <LinkContainer to="/checkout">
          <Button className="ms-3">Checkout</Button>
        </LinkContainer>
      </>
    )
  }
}

export default Cart