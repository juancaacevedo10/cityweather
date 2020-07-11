import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InfoDay from './infoDay'
import InfoDayWeek from './infoDayWeek'

const infoWeek = ({ hours, daily }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs="12" lg="6" className="text-center">
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <em>weather every hour</em>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Container fluid>
                  <Row className="justify-content-md-center text-center " >
                    <>
                      <Col xs={3} md={3}>
                        <div className="py-2">Hours</div>
                      </Col>
                      <Col xs={3} md={3}>
                        <div className="py-2">Clouds</div>
                      </Col>
                      <Col xs={3} md={3}>
                        <div className="py-2">weather</div>
                      </Col>
                      <Col xs={3} md={3}>
                        <div className="py-2">icon</div>
                      </Col>
                    </>
                    {
                      hours.map((hour, index) => {
                        return (
                          <InfoDay
                            key={index}
                            dt={hour.dt}
                            clouds={hour.clouds}
                            weather={hour.weather}
                          >
                          </InfoDay>
                        )
                      })
                    }
                  </Row>
                </Container>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                weather every week
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Container fluid>
                  <Row className="justify-content-md-center text-center " >
                    <>
                      <Col xs={3} md={3}>
                        <div className="py-2">Dia</div>
                      </Col>
                      <Col xs={3} md={3}>
                        <div className="py-2">Clouds</div>
                      </Col>
                      <Col xs={3} md={3}>
                        <div className="py-2">weather</div>
                      </Col>
                      <Col xs={3} md={3}>
                        <div className="py-2">icon</div>
                      </Col>
                    </>
                    {
                      daily.map((daily, index) => {
                        return (
                          <InfoDayWeek
                            key={index}
                            dt={daily.dt}
                            clouds={daily.clouds}
                            weather={daily.weather}></InfoDayWeek>
                        )
                      })
                    }
                  </Row>
                </Container>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  )
}

export default infoWeek
