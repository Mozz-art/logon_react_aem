import { MapTo } from "@adobe/aem-spa-component-mapping";
import React from 'react'
import { WeatherContainer } from "./weather.styled.js";
import { City } from "./weather.styled.js";
import { Temperature } from "./weather.styled.js";
import { WeatherBox} from "./weather.styled.js";
import Regions from "./regions"
const Weather = () => {
  function weatherAPI(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
    
        const lat = position.coords.latitude
        const long = position.coords.longitude
            
        fetch(`https://api.weatherapi.com/v1/current.json?key=3a8e38945c8048d4a22134953221002&q=${lat}, ${long}&aqi=no`)
        .then((respondes)=> respondes.json()).then(result =>{
          
          const city = result.location.name
          const region = Regions(result.location.region)
          const temp = result.current.temp_c
          
          let icons = result.current.condition.icon
          
          document.querySelector("#city").innerHTML = city + " - " + region;
          document.querySelector("#temperature").innerHTML = temp.toFixed(0) + "º";
          let Icons =  document.querySelector("#icon")
          Icons.src = icons
        })
      
      })
    }
  }
  weatherAPI() 
  return (
    <WeatherContainer>
        <City id="city">Error</City>
        <WeatherBox >
        <Temperature id="temperature">Reload</Temperature>
        <img id="icon" src=" "/>
        </WeatherBox>
    </WeatherContainer>

  )
}

export default MapTo("reactapp/components/content/weather")(Weather);