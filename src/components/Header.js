import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Header () {
  return (
    <Container className="mw-100 py-4 bg-info">
      <Row>
        <Col className="text-center lead"><em>Conoce el clima con CITYWEATHER</em></Col>
      </Row>
    </Container>
  )
}
