import { MapTo } from "@adobe/aem-spa-component-mapping";
import React, { useEffect, useState } from 'react'
import { ClockMain } from './clock.styled.js';

const Clock = () => {
  const [clockState, setClockState] = useState();
  let date = new Date();
  let day = new Array ("Domingo", "Segunda", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado");
  let month = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "maio", "Junho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
  let fullDate = (day[date.getDay()]) + " , " + date.getDate() + " de " + month[date.getMonth()] + " de " + date.getFullYear();

  useEffect(() => {
    setInterval(() => {
      let date = new Date();   
      
      setClockState(date.getHours() + ":" + date.getMinutes());
    }, 1000);
  }, []);
  return (
    <ClockMain>
        <input type="text" placeholder={clockState} disabled />
        <p>{fullDate}</p>
    </ClockMain>
    
  )


}

export default MapTo("reactapp/components/content/clock")(Clock);