import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='p-3'>
      <Container>
        <Row>
          <Col className='text-center'>
            Copyright &copy; Me!
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer