import styled from 'styled-components'

export const GalleryContainer = styled.div `
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffedd9;
`

export const GalleryWrapper = styled.div `
    padding-top: 80px;
    padding-bottom: 20px;

    @media screen and (max-width: 768px) {
    padding: 5px;
    }
`

export const GalleryTitle = styled.h1 `
    font-family: 'Monsieur La Doulaise', cursive;
    font-size: 72px;
    font-weight: 400;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 48px;
        margin-top: 5px;
        margin-bottom: 10px;
    }
`

export const GalleryContents = styled.div `
    flex-direction: column;
    -webkit-column-count: 6;
    -moz-column-count: 6;
    column-count: 6;
    -webkit-column-width: 20%;
    -moz-column-width: 20%;
    column-width: 20%;
    padding: 0 12px;
    max-width: 1920px;
    max-height: 80vh !important;
    overflow-y: scroll;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
    }
`

export const GalleryBox = styled.div `
    cursor: pointer;
    margin-bottom: 12px;
    max-width: 200px;

    :hover {
        filter: opacity(0.8);
    }
`

export const GalleryImg = styled.img `
    width: 100%;
`

export const ImgModal = styled.div `
    
`

export const BigImg = styled.img `
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    display: block;
    line-height: 0;
    box-sizing: border-box;
    padding: 20px 0 20px;
    margin: 0 auto;
`