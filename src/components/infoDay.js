import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function infoDay () {
  return (
    <Container fluid>
      <Row className="justify-content-md-center text-center" >
        <Col xs={12} md={12} className="py-3">
          <em>Rain throughout the day.</em>
        </Col>
        <Col xs={4} md={2}>
          <div className="py-2">now</div>
          <div className="py-2">5am</div>
          <div className="py-2">7am</div>
          <div className="py-2">9am</div>
          <div className="py-2">11am</div>
          <div className="py-2">1pm</div>
          <div className="py-2">3pm</div>
          <div className="py-2">5pm</div>
          <div className="py-2">7pm</div>
          <div className="py-2">9pm</div>
          <div className="py-2">11pm</div>
          <div className="py-2">1am</div>
        </Col>
        <Col xs={4} md={2}>
          <div className="py-2">now</div>
          <div className="py-2">5am</div>
          <div className="py-2">7am</div>
          <div className="py-2">9am</div>
          <div className="py-2">11am</div>
          <div className="py-2">1pm</div>
          <div className="py-2">3pm</div>
          <div className="py-2">5pm</div>
          <div className="py-2">7pm</div>
          <div className="py-2">9pm</div>
          <div className="py-2">11pm</div>
          <div className="py-2">1am</div>
        </Col>
        <Col xs={4} md={2}>
          <div className="py-2">now</div>
          <div className="py-2">5am</div>
          <div className="py-2">7am</div>
          <div className="py-2">9am</div>
          <div className="py-2">11am</div>
          <div className="py-2">1pm</div>
          <div className="py-2">3pm</div>
          <div className="py-2">5pm</div>
          <div className="py-2">7pm</div>
          <div className="py-2">9pm</div>
          <div className="py-2">11pm</div>
          <div className="py-2">1am</div>
        </Col>
      </Row>
    </Container>
  )
}
