import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Search from '../components/search'
import BasicDetails from '../components/basicDetails'
import InfoPrincipal from '../components/infoPrincipal'
import InfoDay from '../components/infoDay'
import InfoWeek from '../components/infoWeek'

const Principal = () => {
  const [nomCity, setNomCity] = useState(window.localStorage.length!==0 ? localStorage.getItem('city') : 'bogota')
  const [longLat, setLongLat] = useState([-75.56667, 6.21667])
  const [basicDetail, setBasicDetail] = useState([])
  const [infoPrin, setInfoPrin] = useState([])
  const [description, setDescription] = useState([])
  const [validador, setValidador] = useState(false)
  

  useEffect(() => {
    console.log('useEffect')
    getLongLat()
    setValidador(true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  

  const getLongLat = async () => {
    const data = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${nomCity}.json?access_token=pk.eyJ1IjoianVhbjIxMyIsImEiOiJja2NmOTB4MHEwYjBzMnFxZjd1OXU4eWRrIn0.lqT-fURYPFnukWO5ggfpGw`)
    const coords = await data.json()
    setLongLat(coords.features[0].center)
    setValidador(false)

  }

  const getForecast = async () => {    
    const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${longLat[1]}&lon=${longLat[0]}&appid=4f8ea658d301f552ef1e831625f4d9da`)
    const forecast = await data.json()
    setBasicDetail(forecast.current)
    setInfoPrin(forecast)
    setDescription(forecast.current.weather[0].description)
    console.log(forecast)
  }
    if(validador) {
    getForecast()
  }

  const changecity = () => {
    if (nomCity !== localStorage.getItem('city')) {
      setNomCity(localStorage.getItem('city'))
      getLongLat()
      getForecast()
    }
  }
  changecity()

  return (
    <div>
      <Header></Header>
      <Search ></Search>
      <BasicDetails
        humidity={basicDetail.humidity}
        pressure={basicDetail.pressure}
        visibility={basicDetail.visibility}
        wind_speed={basicDetail.wind_speed}
        uvi={basicDetail.uvi}
        dew_point={basicDetail.dew_point}
      ></BasicDetails>
      <InfoPrincipal
        lat={infoPrin.lat}
        lon={infoPrin.lon}
        summary={basicDetail.weather}
        temperature={basicDetail.clouds}
        summer={description}
      ></InfoPrincipal>
      <InfoDay></InfoDay>
      <InfoWeek></InfoWeek>
    </div>
  )
}

export default Principal
