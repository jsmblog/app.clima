import React from 'react'
import wind from './styles/wind.png'
import cloudy from './styles/cloudy.png'
import termometro from './styles/termometro.png'

const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  options.timeZone = 'UTC';
  options.timeZoneName = 'short';
  const now = today.toLocaleString('es-US', options);

  const hours = new Date();
  const nowHours = hours.toLocaleTimeString('en-US');
  
 

const WeatherCard = ({weather,temps,isCelsius,changeTemps,}) => {
  return (
    <div>
        <section>
            <div>
                <img  className='img-icon' src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" width="200px" />
            </div>
            <h2 className='tittle'> 
            Estás en: <span> {weather?.name} 
                    {weather?.sys.country} </span>
                    <br />
                    <span id="hours">{nowHours}</span>
            </h2>
            <div className='timeZone'>
                <h3>{now}</h3>
            </div>
            <div className='grades'>
                <div>
                <h3 >
                    {temps.celsius}ºC
                </h3>
                <h3 >
                    {temps.fahrenheit}ºK
                </h3>
                </div>
                <div>
                <h2>LAT: <span>{weather.coord.lat}</span> </h2>
                <h2>LON: <span>{weather.coord.lon}</span></h2>
                </div>
            </div>
    </section>
    <section>
        <div className='cont-info-clima'>
            <div>
                <span >Clima:</span>  <br /><span id='cont-span1'> {weather?.weather[0].description}</span> <br />
                <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} width="60px" alt="" />
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
        <button onClick={changeTemps} className='btn' >
            ºC  /  ºF
        </button>
        <br /><br />
        <h2>{}</h2>
        </div>
    </section>
    </div>
  )
}

export default WeatherCard