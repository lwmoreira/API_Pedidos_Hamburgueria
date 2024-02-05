import styled from 'styled-components'
import Backgroud from './assets/backgroud1.svg'

export const Container = styled.div`

    background: url("${Backgroud}");
    background-size: cover;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
   
`;

export const Image = styled.img`

    margin-top: 30px;
`;

export const ContainerItens = styled.div`

    padding: 50px 36px;

    border-radius: 61px 61px 0px 0px;
    background: linear-gradient(157deg, 
        rgba(255, 255, 255, 0.60) 0.84%,
        rgba(255, 255, 255, 0.60) 0.85%, 
        rgba(255, 255, 255, 0.15) 100%);

    display: flex;
    flex-direction: column;
    height: 100vh;
    margin-top: 34px;

`;

export const H1 = styled.h1`


    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
    color: #FfffFF;
    text-align: center;
    margin-bottom: 70px;

`;

export const InputLabel = styled.p`

    color: #EEE;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    font-style: normal;
    font-weight: bold;
    margin-left: 25px;


`;

export const Input = styled.input`

    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    padding-left: 25px;
    margin-bottom: 34px;

    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    line-height: 28px;
    color: #FFF;


`;

export const Button = styled.button`

border-radius: 14px;
background: var(--Templates-5-Color-1, rgba(0, 0, 0, 0.80));
width: 342px;
height: 74px;
color: #FFF;


font-size: 17px;
font-style: normal;
font-weight: bold;
line-height: 28px;
border: none;
cursor: pointer;

display: flex;
align-items: center;
justify-content: center;
gap: 20px;

&:hover { 
    opacity: 0.8;
}

&:active {
    opacity: 0.5;
}
`;

export const User = styled.li`

    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 25px;

    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    width: 342px;
    height: 58px;
    border: none;
    outline: none;

p {

    color: #ffffff;
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    line-height: 28px;

}

button {

    background: none;
    border: none;
    cursor: pointer;

    &:hover { 
    opacity: 0.8;
}
}



`;


