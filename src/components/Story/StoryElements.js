import styled from 'styled-components'

export const StoryContainer = styled.div `
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin-top: 40px;
`
export const StoryContent = styled.div `
    z-index: 3;
    width: 1200px;
    display: grid;
    grid-template-areas:
        'ourStory ourStory ourStory'
        'blank message shoes'
        'hands message no';
    column-gap: 3rem;
    row-gap: 2rem;
    margin: 20px;
    border: 3px solid #FFE5B4;
    padding: 20px;
    border-radius: 10px;
`

export const StoryTitle = styled.div `
    grid-area: ourStory;
    display: flex;
    justify-content: center;
    height: fit-content;
`

export const StoryBox = styled.div `
    grid-area: message;
    width: 400px;
    height: fit-content;
    display: flex;
    justify-content: center;
    padding-top: 40px;
`

export const ShoesContainer = styled.div `
    display: flex;
    grid-area: shoes;
    justify-content: center;
`

export const Shoes = styled.img `
    width: 100%;
`

export const HandsContainer = styled.div `
    display: flex;
    grid-area: hands;
    justify-content: center;
`

export const Hands = styled.img `
    width: 100%;
`

export const OurStoryTitle = styled.h1 `
    font-family: 'Monsieur La Doulaise', cursive;
    font-size: 72px;
    font-weight: 400;
    margin: 10px 0 0 0;
`

export const StoryMessage = styled.p `
    font-family: 'PT Serif', serif;
    font-size: 20px;
    font-weight: 300;
`