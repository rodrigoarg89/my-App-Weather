import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({changeUnits}) => {


const [weather, setWeather] = useState({});
const [isCentigrades, setIsCentigrades] = useState({})

useEffect(() => {
  navigator.geolocation.getCurrentPosition(success);
  function success(pos) {
    const crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=499b108b5eea0da22390f0019261c532&units=metric`
      )
      .then((res) => setWeather(res.data));
  }
}, []);




console.log(weather)

  return (
    <div className="App-weather">
      <h1>My Weather App</h1>
      <h2>
        {weather.name} - {weather.sys?.country}
      </h2>
      <img src={weather.weather?.[0].description} alt="" />
      <p className='description'>"{weather.weather?.[0]?.description}"</p>
      <div className="flex-weather">
        <div>
          Temperature <p className='temp'>{isCentigrades ? weather.main?.temp : (weather.main?.temp*1.8+32)} {isCentigrades ? '°C': '°F'}</p>
        </div>

        <div>
          Wind Speed <p>{weather.wind?.speed} Km/h</p>
        </div>
        <div>
          Pressuere <p>{weather.main?.pressure} hPa</p>
        </div>
        <button className="btn-weather" onClick={() => { setIsCentigrades(!isCentigrades)}}> Degrees °F/°C
        </button>
      </div>
      
    </div>
  );
}

export default Weather;