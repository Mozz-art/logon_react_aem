import styled from "styled-components";

const HomeMain = styled.div`
    width: 100%;
    height: 25em;
    max-height: 1080px;
    font-family: 'Poppins';

`;
export { HomeMain };

const TxtIntro = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 90%;
    height: 100%;
`;
export { TxtIntro };
 
const TxtIntroduc = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
        margin: 10% 0 0 0; 
        display:block;
        h1{
            font-weight: 900;
            font-size: clamp(1.5rem, 3.5vw, 3.5rem);
            color: #C12D18;
        }
        h2{
            font-weight: 900;
            font-size: 38px;
            color: #C12D18; 
        }
        p{
            padding: 0 0 1% 0;
            font-weight: 900;
            font-size: 24px;
            color: black;
        }
`;
export { TxtIntroduc };