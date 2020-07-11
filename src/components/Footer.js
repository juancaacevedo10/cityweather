import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer () {
  return (
    <Container fluid className="mw-100 py-4 text-center bg-info mt-4" >
      <Row>
        <Col>Made by Juan Camilo Acevedo © 2020</Col>
      </Row>
    </Container>
  )
}
