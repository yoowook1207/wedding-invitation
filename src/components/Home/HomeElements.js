import styled from 'styled-components'

export const HomeContainer = styled.div `
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: beige;
    position: relative;
    z-index: 1;
    padding: 0;
`

export const HomeContent = styled.div `
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1 `
    color:gray;
    font-size:  48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

