import styled from "styled-components";

const ClockMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    input{
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 144px;
        border: none;
        font-weight: bold;
        background-color: transparent;
        line-height: 0.8em;
        color: #222222;
        padding: 3% 0 0 0;
    }
    p{
        display: flex;
        align-items: center;
        margin: 0 0 0 10%;
        font-weight: 400;
        font-size: 14px;
        padding: 2% 0 0 6%;
    }

`;
export { ClockMain };
