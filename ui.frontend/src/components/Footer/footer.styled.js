import styled from "styled-components";

const GridContainer = styled.div`
    position: absolute;
    bottom: 0;
    display: grid;
    justify-content: flex-end;
    width: 100%;
    height: 10vh;
    background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
    grid-template-columns: 30%  5% 5% 15% 6% 6% 6%;
    gap: 2%;
    font-family: 'Poppins', sans-serif;
    @media (max-width: 1150px) {
		grid-template-columns: 20% 80%;
	  }
`;
export { GridContainer };


const GridItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    color: white;
    font-size: clamp(0.5rem, 3.0vw, 0.8rem);
`;
export { GridItem };


const FirstItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    @media (max-width: 1150px) {
		display: none;
	  }
`;
export { FirstItem  };


const Bar = styled.div`
    display: flex;
    align-items: center;
    width: 1%;
    height: 70%;
    background-color: white;
    @media (max-width: 1150px) {
		display: none;
	  }
`;
export { Bar  };

const Refresh = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    height: 100%;
    font-size: 14px;
    margin: 0 0 0 15%;
    @media (max-width: 1150px) {
		display: none;
	  }
`;
export { Refresh  };


const Navigation = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: 400;
    font-size: clamp(0.5rem, 7.0vw, 0.9rem);
    
    color: #C12D18;
    @media (max-width: 1150px) {
        margin-bottom: 5%;
        height: 4.5em;
        
	  }
     @media (max-width: 400px) {
      position: absolute;
        left: 150px;
        height: 4em;
        width: 60%;
        margin-top: -7%;
        
	  }

`;
export { Navigation  };


const GridItemTimer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Poppins';
    font-weight: 400;
    h1{
        font-size: 48px;
        font-weight: bold;
        color: white; 
    }
    h2{
        margin: -3% 0 0 5%;
        font-size: 14px;
        color: white;
    }
    @media (max-width: 1150px) {
		display: none;
	  }
`;
export { GridItemTimer  };

const BtnLogout = styled.div`
    background: none;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    text-decoration : none;
    @media (max-width: 400px) {
        position: absolute;
        right: 280px;
        margin-top: -10%;
	  }

    
    &:hover{
        color: #C12D18;
    }

`;
export { BtnLogout  };

