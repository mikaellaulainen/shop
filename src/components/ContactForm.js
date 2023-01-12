import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

const ContactForm = () => {
  return (
    <Form className="mx-sm-auto text-start contact-form m-3 p-3 col-sm-9 col-md-8 col-lg-4">
      <Form.Group>
        <Form.Label>Firstname:</Form.Label>
        <Form.Control/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Lastname:</Form.Label>
        <Form.Control/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Email address:</Form.Label>
        <Form.Control/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Your message:</Form.Label>
        <Form.Control as="textarea" rows={3}/>
      </Form.Group>
      <Button variant="dark" className="mt-3">Submit</Button>
    </Form>
  )
}

export default ContactForm