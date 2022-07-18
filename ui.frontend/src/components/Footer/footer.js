import { MapTo } from "@adobe/aem-spa-component-mapping";
import React from 'react'
import { GridContainer } from "./footer.styled.js";
import { GridItem } from "./footer.styled.js";
import { FirstItem} from "./footer.styled.js";
import { Bar} from "./footer.styled.js";
import { Refresh} from "./footer.styled.js";
import { Navigation } from "./footer.styled.js";
import { GridItemTimer } from "./footer.styled.js";
import { BtnLogout } from "./footer.styled.js";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Footer = () => {
  function Timeout() {

    let timer = 601;
    let history = useHistory();

    let timerInterval = setInterval(function() {
      if(timer == "0") {
        history.push("/content/reactapp/us/en/home.html");
        timer = 601;
        clearInterval(timerInterval)
  
      }else {
        timer--;
        document.querySelector("#timer").innerHTML = timer;
      }
    }, 1000);
  }
  return (
    <GridContainer>
        <GridItem><FirstItem>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</FirstItem></GridItem>
        <GridItem><Bar/></GridItem>
        <GridItem><Refresh>Aplication refresh in</Refresh></GridItem>
        <GridItemTimer><h1 id="timer"></h1><h2>seconds</h2></GridItemTimer>
        <GridItem  id="seconds">{Timeout()}</GridItem>
        <GridItem><Navigation>Continuar Navegando</Navigation></GridItem>
        <Link to={"/content/reactapp/us/en/home.html"}>
        <GridItem><BtnLogout>Logout</BtnLogout></GridItem>
        </Link>
    </GridContainer>
    
  )
}

export default MapTo("reactapp/components/content/footer")(Footer);