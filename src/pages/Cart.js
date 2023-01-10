import Button from "react-bootstrap/Button"
import { LinkContainer } from "react-router-bootstrap"

const Cart = ({cart}) => {
  console.log(cart)
  return (
    <>
      <p>Welcome to Cart</p>
      <LinkContainer to="/checkout">
        <Button>Checkout</Button>
      </LinkContainer>
    </>
  )
}

export default Cart