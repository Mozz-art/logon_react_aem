import { MapTo } from "@adobe/aem-spa-component-mapping";
import React, { useRef, useState } from 'react'
import { Container } from "./form.styled.js";
import { FormSide } from "./form.styled.js";
import { FormInput} from "./form.styled.js";
import { Button } from "./form.styled.js";
import { Error } from "./form.styled.js";
import { ContainerMain } from "./form.styled.js";
import VectorUser from "./../assets/VectorUser.png";
import VectorPassword from "./../assets/VectorPassword.png";
import './font.css';
import { useHistory } from "react-router-dom";


const Form = () => {
  const name=useRef()
  const password=useRef()
  let history = useHistory();
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if(name.current.value=="admin" && password.current.value=="admin") {
    localStorage.setItem("nameData", "admin");
    localStorage.setItem("passwordData", "admin");
    setError("");
    history.push("/content/reactapp/us/en/HomePage");
    } else {
      setError("visible");
    }
  } 

  return (
    <ContainerMain onSubmit={handleSubmit}>
      <Container>
        <h1>Olá,</h1>
        <p>Para continuar navegando de forma segura, efetue o login na rede.</p>
        <h2>Login</h2>
        <FormSide>
          <FormInput>
          <input type="text" placeholder="Usuário" ref={name}/>
          </FormInput>
          <img src={VectorUser} alt="user" />

        </FormSide>

        <FormSide>
          <FormInput>
          <input type="password" placeholder="Senha" ref={password}/>
          </FormInput>
          <img src={VectorPassword} alt="password" />

        </FormSide>

        <Error show={error}>
        Ops, usuário ou senha inválidos. Tente novamente!
        </Error>

        <Button>
        Continuar
        </Button>

      </Container>
  </ContainerMain>
    
  )
}

export default MapTo("reactapp/components/content/form")(Form);