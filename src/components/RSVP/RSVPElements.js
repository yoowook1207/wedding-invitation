import styled from 'styled-components'
import titleBg from '../../assets/images/Touching.jpg'

export const RSVPContainer = styled.div `
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
`

export const RSVPWrapper = styled.div `
    width: 1200px;
    border: 3px solid #FFE5B4;
    padding: 20px;
    border-radius: 10px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const TitleHolder = styled.div `
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${titleBg});
    background-size: cover;
    background-position: center;
    padding: 50px 0 50px 0;
    margin-bottom: 15px;
    width: 100%;

    @media screen and (max-width: 768px) {
        padding: 20px 0 20px 0;
    }
`

export const RSVPTitle = styled.h1 `
    font-family: 'Playfair Display', serif;
    font-size: 72px;
    font-weight: 400;
    margin: 10px 0 20px 0;
    text-align: center;
    color: white;

    @media screen and (max-width: 768px) {
        font-size: 48px;
    }
`

export const RSVPForm =styled.form `
    width: 100%;
    font-family: 'PT Serif', serif;
`

export const AttendingHolder = styled.div `
    justify-content: center;
    display: flex;
    margin-bottom: 10px;
    gap: 20px;
`

export const AttendingLabel = styled.label `
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media screen and (max-width: 768px) {
        font-size: 15px;
    }
`

export const Attending = styled.input `
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background: #eee;
  border-radius: 50%;
  color: #000;
`

export const RSVPLabels = styled.label `
    margin-bottom: 10px;
    display: block;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`

export const RSVPInputs = styled.input `
    width: 95%;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 12px;

    @media screen and (max-width: 768px) {
    padding: 5px;
    margin-bottom: 5px;
    }
`

export const SubmitButton = styled.button `
  background-color: #ccc;
  color: black;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 200px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
  
  @media screen and (max-width: 768px) {
    padding: 5px;
    margin-bottom: 5px;
    }
`