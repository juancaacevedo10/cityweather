import React from 'react'
import Col from 'react-bootstrap/Col'

// eslint-disable-next-line react/prop-types
const infoDay = ({ dt, clouds, weather }) => {
  // eslint-disable-next-line react/prop-types
  var icon = weather[0].main
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

  const unixTimestamp = dt
  var date = new Date(unixTimestamp * 1000)

  return (
    <>
      <Col xs={3} md={3}>
        <div className="py-2">{date.toLocaleTimeString('es-CO')}</div>
      </Col>
      <Col xs={3} md={3}>
        <div className="py-2">{clouds}°</div>
      </Col>
      <Col xs={3} md={3}>
        <div className="py-2">{weather[0].description}</div>
      </Col>
      <Col xs={3} md={3}>
        <div className="py-2"><i className={icon}></i> </div>
      </Col>
    </>
  )
}

export default infoDay
