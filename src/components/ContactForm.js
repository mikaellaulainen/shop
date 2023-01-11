import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

const ContactForm = () => {
  return (
    <Form className="m-3 p-3 border">
      <Form.Group>
        <Form.Label>First name</Form.Label>
        <Form.Control/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Lastname</Form.Label>
        <Form.Control/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Your message:</Form.Label>
        <Form.Control as="textarea" rows={3}/>
      </Form.Group>
      <Button className="mt-3">Submit</Button>
    </Form>
  )
}

export default ContactForm