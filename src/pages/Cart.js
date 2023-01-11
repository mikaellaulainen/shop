import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'

const Cart = ({ cart,cartTotal }) => {
  console.log(cart)
  return (
    <>
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

export default Cart