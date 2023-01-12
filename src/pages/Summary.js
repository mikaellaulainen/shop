import Button from 'react-bootstrap/Button'

const Summary = ({ cart,cartTotal }) => {
  //Ending shopping with alert!
  const order = (e) => {
    e.preventDefault()
    alert(`Shopping is done total is: ${cartTotal}`)
  }
  console.log(cart)
  return (
    <>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="border m-3 p-3">{item.name} Amount: {item.amount}  total: {item.amount*item.price}€</li>
        ))}
      </ul>
      <p>Order info</p>
      <p>Total: {cartTotal} €</p>
      <Button onClick={order}>Order</Button>
    </>
  )
}

export default Summary