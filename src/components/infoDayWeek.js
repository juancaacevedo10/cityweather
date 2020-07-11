import React from 'react'
import Col from 'react-bootstrap/Col'

const InfoDayWeek = ({ dt, clouds, pressure, weather }) => {
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
  var timestamp = dt
  var date = new Date(timestamp * 1000)
  var formattedDate = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear()
  return (
    <>
      <Col xs={3} md={3}>
        <div className="py-2">{formattedDate}</div>
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

export default InfoDayWeek
