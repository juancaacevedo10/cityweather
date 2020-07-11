import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../images/logo.png'
import Image from 'react-bootstrap/Image'

// eslint-disable-next-line react/prop-types
const infoPrincipal = ({ lat, lon, temperature, summer, icon }) => {
  switch (icon) {
    case 'Thunderstorm':
      icon = 'fas fa-poo-storm'
      break
    case 'Drizzle':
      icon = 'fas fa-cloud-showers-heavy'
      break
    case 'Rain':
      icon = 'fas fa-cloud-rain'
      break
    case 'Snow':
      icon = 'far fa-snowflake'
      break
    case 'Clouds':
      icon = 'fas fa-cloud'
      break
    case 'Clear':
      icon = 'fas fa-sun'
      break
    default:
      icon = 'fas fa-smog'
  }

  return (
    <Container className="mw-100 py-4 px-5 text-center">
      <h3 className="py-2"><em className="px-2 py-2 border border border-info rounded">{window.localStorage.length !== 0 ? localStorage.getItem('city') : 'medellin'}</em></h3>
      <Row className="justify-content-md-center pt-2">
        <Col xs="12" md="2" lg="2" className="d-flex align-items-center pb-2">
          <Image src={Logo} fluid />
        </Col>
        <Col xs="12" md="4" lg="4">
          <Row className="border border-info rounded py-2">
            <Col xs="12" lg="12" className="border-bottom border-info rounded-bottom">
              <i className={icon}></i> <h3>{Math.round(temperature)}˚ {summer} </h3>
            </Col>
            <Col xs="12" lg="12">
              <Row>
                <Col xs="12" md="6" className="py-2">lat: {lat}˚</Col>
                <Col xs="12" md="6" className="py-2">lon: {lon}˚</Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default infoPrincipal
