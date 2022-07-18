import styled from "styled-components";

const ContainerMain = styled.form`
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
`;
export { ContainerMain };

const Container = styled.div`
  width: 60%;
  height: 100vh;
  max-height: 1080px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  @media (max-width: 1000px) {
		width: 100%;
    margin-left: 20%;
    margin-BOTTOM: 5%;

	  }

  input {
    margin-bottom: 15%;
    width: 100%;
    height: 3em;
    border-radius: 50px;
    border: 1px solid #ccc;
    padding: 1em;
    background-color: #26292c;
    
    :focus {
      outline: none;
      border: 1px solid #fff;
      background-color: #26292c;
    }
  }
  h1 {
    margin-top: 15%;
    font-size: 60px;
    color: white;
    @media (max-width: 400px) {
		font-size:48px;

	  }
  }
  p {
    margin: 2% 0 20% 0;
    width: 60%;
    font-size: 16px;
    color: white;
    @media (max-width: 400px) {
		font-size:12px;

	  }
  }
  h2 {
    margin: 0 0 3% 0;
    font-size: 30px;
    color: white;
    @media (max-width: 400px) {
		font-size:24px;

	  }
  }
`;
export { Container };

const Button = styled.button`
  width: 70%;
  height: 3.5em;
  border-radius: 25px;
  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: white;
  box-shadow: 2px 5px 5px #000000;
`;
export { Button };

const FormSide = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
  img {
    margin-bottom: 15%;
    margin-left: -10%;
    width: 5%;
  }
`;
export { FormSide };

const FormInput = styled.div`
  display: flex;
  width: 100%;
  margin-left: -5%;
`;
export { FormInput };

const Error = styled.div`
  width: 50%;
  margin: 5% 0 5% 10%;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #e9b425;
  visibility: ${(props) => (props.show === "visible" ? "visible" : "hidden")};
  @media (max-width: 1200px) {
		margin: -5% 0 2% 10%;
    font-size: 12px;
	  }
  @media (max-width: 400px) {
		font-size: 12px;
	  }
`;
export { Error };
