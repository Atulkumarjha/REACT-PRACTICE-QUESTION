//DEVELOP A WEATHER APP THAT FETCHES AND DISPLAY THE WEATHER BASED ON THE USER'S LOCATION
import React from 'react'
import {useState,useEffect} from 'react';

const Fourteen = () => {
    const [weather,setWeather] = useState(null);

    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=51feae4846f98ef742b34849649eceb2`)
                .then((response)=>response.json())
                .then((data)=>setWeather(data));
            })
        }
    },[])


  return (
    <div>
      {weather ? (
        <div>


            <h2>Current Weather</h2>
            <p>Temperature:{weather.main.temp}</p>
            <p>Condition:{weather.weather[0].description}</p>
        </div>
      ):(
        <p>
            Loading.....
        </p>
      )
    }
    </div>
  )
}

export default Fourteen
