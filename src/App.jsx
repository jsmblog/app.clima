import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'
import Loader from './components/Loader';
import WeatherCard from './components/WeatherCard'
//! Api_Key
const apiKey = `268b83b4ff9e94833d18918d7838ce94`

function App() {
  //*stated coords
  const [coords, setCoords] = useState();
  //*stated weather
  const [weather, setWeather] = useState();
  //*stated temps 
  const [temps, setTemps] = useState();
  //*stated conversion celsius to fahrenheit
  const [isCelsius, setIsCelsius] = useState(true)

  //* latitude and longitude
    let sucess = (e) => {
    console.log(e);
    const newCoords = {
      latitude: e.coords.latitude,
      longitude: e.coords.longitude
    }
    setCoords(newCoords)
  }

  const changeTemp = () => setIsCelsius(!isCelsius)

    
//*use effect geolocation
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(sucess)
    },[])
//*url for make petition to Api
    useEffect(() => {
    if(coords){
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}`
      axios.get(URL)
      .then(res => {
        setTimeout(()=>{
          setWeather(res.data) //*conversions of celsius to fahrenheit and vice versa
        const celsius = (res.data.main.temp - 273.15).toFixed(2);
        const fahrenheit = (celsius * (9/5) + 32).toFixed(2);
        const newTemps = {
          celsius ,
          fahrenheit
        }
        setTemps(newTemps)
        },2000)
      })
      .catch(err => console.log(err))
    }
    },[coords])
      


  return (
    <div className="App">
    {
      weather ? (
      <
    WeatherCard weather={weather} temps={temps} isCelsius={isCelsius} changeTemps={changeTemp} />
      ) : <Loader />
    }
    
    </div>
  )
}

export default App
