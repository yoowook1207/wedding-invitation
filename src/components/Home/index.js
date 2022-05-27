import React from 'react'
import { ArrowHolder, HomeContainer, HomeContent, HomeP, Title } from './HomeElements'
import { AiOutlineArrowDown } from "react-icons/ai"

const Home = () => {

  return (
    <>
      <HomeContainer>
        <HomeContent>
          <Title>
            We  are  getting  married
          </Title>
          <HomeP>
            Save your date on 08.05.2022
          </HomeP>
          <ArrowHolder>
            <AiOutlineArrowDown size={28}/>
          </ArrowHolder>
        </HomeContent>
      </HomeContainer>
    </>
  )
}

export default Home