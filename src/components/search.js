import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Search = () => {
  const [city, setCity] = useState('bogota')

  const handleChange = (e) => {
    setCity(e.target.value)
    e.preventDefault()
  }

  const handleClick = () => {
    localStorage.setItem('city', `${city}`)
  }

  return (
    <Container className="mw-100 py-3 my-3 ">
      <Row>
        <Col >
          <Form inline className="justify-content-center">
            <FormControl type="text" placeholder="enter your capital city" className="mr-sm-2 mb-2" onChange={handleChange}/>
            <Button variant="outline-info" className="mb-2" href="/" onClick={handleClick}>Search</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Search
