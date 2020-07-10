import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const basicDetails = ({ humidity, pressure, visibility, wind_speed, uvi, dew_point }) => {
  console.log()
  return (
    <Container className="mw-100 py-3 color-details">
      <Row className="text-center">
        <Col xs={4} md={2} className="pb-2">
          <h6>Wind</h6> {wind_speed} mph
        </Col>
        <Col xs={4} md={2} className="pb-2">
          <h6>Humidity</h6> {humidity}%
        </Col>
        <Col xs={4} md={2} className="pb-2">
          <h6>Dew Pt</h6> {dew_point}˚
        </Col>
        <Col xs={4} md={2} className="pb-2">
          <h6> UV Index</h6> {uvi}
        </Col>
        <Col xs={4} md={2} className="pb-2">
          <h6>Visibility</h6> {visibility} mi
        </Col>
        <Col xs={4} md={2} className="pb-2">
          <h6>Pressure</h6> {pressure} hpa
        </Col>
      </Row>
    </Container>
  )
}

export default basicDetails
