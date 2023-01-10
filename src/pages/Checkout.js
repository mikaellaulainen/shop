import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
const Checkout = () => {
  return (
    <Form className='m-3 border p-3'>
      <Form.Group>
        <Form.Label>Firstname</Form.Label>
        <Form.Control/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Lastname</Form.Label>
        <Form.Control/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Postcode</Form.Label>
      <Form.Control/>
      </Form.Group>
      <Form.Group>
        <Form.Label>City</Form.Label>
        <Form.Control/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Phonenumber</Form.Label>
        <Form.Control/>
      </Form.Group>
      <LinkContainer to="/summary">
        <Button className='mt-3'>Accept</Button>
      </LinkContainer>
    </Form>
  )
}

export default Checkout