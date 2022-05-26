import React from 'react'
import { Hands, Shoes, StoryTitle, StoryContainer, StoryContent, ShoesContainer, HandsContainer, OurStoryTitle, StoryBox, StoryMessage,} from './StoryElements'
import shoes from '../../assets/images/Shoes.jpg'
import hands from '../../assets/images/Hands.jpg'

const Story = () => {

  return (
    <>
        <StoryContainer>
          <StoryContent>
            <StoryTitle>
              <OurStoryTitle>
                Our Story
              </OurStoryTitle>
            </StoryTitle>
            <StoryBox>
              <StoryMessage>
              Semi and Sungwook met in 2020 in the midst of COVID-19 pandemic at a mutual friend’s basement. Sungwook fell in love with Semi at his first sight because of her genuine kindness and cuteness. On the other hand, Semi had no interest in Sungwook this very day due to his quarantine beard that was almost an inch long! Ever since that day, Sungwook always tried to go on a date while Semi tried to meet Sungwook only with a group of friends. Then one day, a group of friends planned to go on a day trip to the beach and everyone except Sungwook and Semi ended up dropping out from the trip very last minute (btw was all planned by Sungwook). This was our very first date which is also when Sungwook asked Semi to be his girlfriend. Even at this point, Semi was unsure so she asked to just stay as friends. However, the more Semi thought about Sungwook, the more she felt that he was more than just a friend and imagined him as a husband. Due to the pandemic, Semi and Sungwook talked hours on the phone (Of course Semi is talking 80%). Sungwook and Semi prayed together on the phone every night. We asked God to guide us and our relationship. Here we are now ready to be devoted to one another in love forever. 
              </StoryMessage>
            </StoryBox>
            <ShoesContainer>
              <Shoes src={shoes}></Shoes>
            </ShoesContainer>
            <HandsContainer>
              <Hands src={hands}></Hands>
            </HandsContainer>
          
          </StoryContent>
        </StoryContainer>
    </>
  )
}

export default Story