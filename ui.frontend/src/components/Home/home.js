import { MapTo } from "@adobe/aem-spa-component-mapping";
import React from 'react'
import { HomeMain } from './home.styled'
import { TxtIntro } from './home.styled'
import { TxtIntroduc } from "./home.styled";


const Home = () => {
    return (
      <HomeMain>
         <TxtIntro>
            <TxtIntroduc>
            <h2>Our mission is</h2>
            <p>Nossa missão é</p>
            <h1>to transform the world</h1>
            <p>transformar o mundo</p>
            <h1>building digital experiences</h1>
            <p>construindo experiências digitais</p>
            <h1>that enable our client’s growth</h1>
            <p>que permitam o crescimento dos nossos clientes</p>
            </TxtIntroduc>
        </TxtIntro>    
      </HomeMain>
      
    )
  }
  
  export default MapTo("reactapp/components/content/home")(Home);