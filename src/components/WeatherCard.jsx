import React from 'react'
import wind from './styles/wind.png'
import cloudy from './styles/cloudy.png'
import termometro from './styles/termometro.png'

const WeatherCard = ({weather,temps,isCelsius,changeTemps}) => {
  return (
    <div>
        <section>
            <div>
                <img  className='img-icon' src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" width="150px" />
            </div>
            <h2 className='tittle'> 
            Estás en: <span> {weather?.name} 
                {weather?.sys.country} </span>
            </h2>
            <h3 className='grades'>
                {isCelsius ? temps?.celsius : temps?.fahrenheit} ºK
            </h3>
    </section>
    <section>
        <div className='cont-info-clima'>
            <div>
                <span >Clima:</span>  <br /><span id='cont-span1'> {weather?.weather[0].description}</span> <br />
                <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} width="50px" alt="" />
            </div>
            <div>
                <span>Wind speed:</span> <br /><span id='cont-span2'>{weather?.wind.speed} .m/seg</span> <br />
                <img src={wind} width="50px" alt="" />
            </div>
            <div>
                <span>Clouds:</span> <br />
                <span id='cont-span3'>{weather?.clouds.all} %</span>
                <br /><img src={cloudy} width="50px" alt="" />
            </div>
            <div>
                <span>Preassure:</span> <br /> <span id='cont-span4' >{weather?.main.pressure} .hPa</span> <br />
                <img src={termometro} width="50px" alt="" />
            </div>
        </div>
    </section>
    <section>
        <div>
        <button className='btn' onClick={changeTemps}>
            ºC  /  ºF
        </button>
        </div>
    </section>
    </div>
  )
}

export default WeatherCard