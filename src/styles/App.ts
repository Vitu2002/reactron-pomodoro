import styled from "styled-components";


export const Header = styled.header`
    top: 0;
    position: fixed;
    width: 100%;
    height: 10px;
    background-color: #c1c1c1;
    border-radius: 5px;
`

export const ProgressBar = styled.div`
    height: 10px;
    background-color: #8348a5;
    border-radius: 5px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #1c1c1c;
`

export const Timer = styled.div`
    display: flex;
    text-align: center;
    font-size: 10rem;
    color: aqua;
    top: 0;
    font-weight: bold;
    font-family: 'JetBrains Mono', sans-serif;
    text-shadow: 0 0 10px #1c1c1c;
    margin-bottom: 1rem;
    background-color: #a1a1a1;
    border-radius: 0.5rem;
    padding: 1rem;
`

export const Seconds = styled.div`
    margin-right: 1rem;
`

export const Minutes = styled.div`
    margin-left: 1rem;
`

export const Separator = styled.div`
    margin: 0 .25rem 0 .25rem;
`

export const Controllers = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100 %;
    margin-top: 1rem;
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 3rem;
    border: 0;
    margin: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: #fff;
    font-weight: bold;
    font-family: 'JetBrains Mono', sans - serif;
    text-shadow: 0 0 10px #1c1c1c;
    cursor: pointer;
`