import styled from "styled-components";

const WeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 20%;
    height: 20%;
    margin: 3% 3% 0 0;
    color: #222222;
    @media (max-width: 400px) {
		margin:  5% 0 0 50%;
	  }
`;
export { WeatherContainer };

const WeatherBox = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;
export { WeatherBox };

const City = styled.span`
    width: 10em;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    padding: 0 0 3% 6%; 
`;
export { City };

const Temperature = styled.span`
    font-weight: bold;
    font-size: 48px;
    margin: 7% 0 0 0; 
`;
export { Temperature };
