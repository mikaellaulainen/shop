import Button from "react-bootstrap/Button"
import { LinkContainer } from "react-router-bootstrap"

const Cart = ({cart}) => {
  console.log(cart)
  return (
    <>
      {cart.map(item => (
        <p className="cart-item border m-3 p-3">{item.itemname} Amount: {item.itemid}</p>
      ))}
      <LinkContainer to="/checkout">
        <Button className="ms-3">Checkout</Button>
      </LinkContainer>
    </>
  )
}

export default Cart