import React, { useState } from 'react'
import { GalleryContainer, GalleryWrapper, GalleryImg, GalleryBox, ImgModal, BigImg, GalleryContents, GalleryTitle } from './GalleryElements'
import Img1 from '../../assets/images/Gallery/1.jpg'
import Img2 from '../../assets/images/Gallery/2.jpg'
import Img3 from '../../assets/images/Gallery/3.jpg'
import Img4 from '../../assets/images/Gallery/4.jpg'
import Img5 from '../../assets/images/Gallery/5.jpg'
import Img6 from '../../assets/images/Gallery/6.jpg'
import Img7 from '../../assets/images/Gallery/7.jpg'
import Img8 from '../../assets/images/Gallery/8.jpg'
import Img9 from '../../assets/images/Gallery/9.jpg'
import Img10 from '../../assets/images/Gallery/10.jpg'
import Img11 from '../../assets/images/Gallery/11.jpg'
import Img12 from '../../assets/images/Gallery/12.jpg'
import Img13 from '../../assets/images/Gallery/13.jpg'
import Img14 from '../../assets/images/Gallery/14.jpg'
import Img15 from '../../assets/images/Gallery/15.jpg'
import Img16 from '../../assets/images/Gallery/16.jpg'
import Img17 from '../../assets/images/Gallery/17.jpg'
import Img18 from '../../assets/images/Gallery/18.jpg'
import Img19 from '../../assets/images/Gallery/19.jpg'
import Img20 from '../../assets/images/Gallery/20.jpg'
import Img21 from '../../assets/images/Gallery/21.jpg'
import Img22 from '../../assets/images/Gallery/22.jpg'
import Img23 from '../../assets/images/Gallery/23.jpg'
import Img24 from '../../assets/images/Gallery/24.jpg'
import Img25 from '../../assets/images/Gallery/25.jpg'
import './GalleryStyle.css';
import {CgClose} from 'react-icons/cg'

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1
    },
    {
      id: 2,
      imgSrc: Img2
    },
    {
      id: 3,
      imgSrc: Img3
    },
    {
      id: 4,
      imgSrc: Img4
    },
    {
      id: 5,
      imgSrc: Img5
    },
    {
      id: 6,
      imgSrc: Img6
    },
    {
      id: 7,
      imgSrc: Img7
    },
    {
      id: 8,
      imgSrc: Img8
    },
    {
      id: 9,
      imgSrc: Img9
    },
    {
      id: 10,
      imgSrc: Img10
    },
    {
      id: 11,
      imgSrc: Img11
    },
    {
      id: 12,
      imgSrc: Img12
    },
    {
      id: 13,
      imgSrc: Img13
    },
    {
      id: 14,
      imgSrc: Img14
    },
    {
      id: 15,
      imgSrc: Img15
    },
    {
      id: 16,
      imgSrc: Img16
    },
    {
      id: 17,
      imgSrc: Img17
    },
    {
      id: 18,
      imgSrc: Img18
    },
    {
      id: 19,
      imgSrc: Img19
    },
    {
      id: 20,
      imgSrc: Img20
    },
    {
      id: 21,
      imgSrc: Img21
    },
    {
      id: 22,
      imgSrc: Img22
    },
    {
      id: 23,
      imgSrc: Img23
    },
    {
      id: 24,
      imgSrc: Img24
    },
    {
      id: 25,
      imgSrc: Img25
    },

  ]

  const [modal, setModal] = useState(false);
  const [tempingSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModal(true);
  }

  document.onkeydown = function (e) {
    if (e.keyCode === 27) {
      setModal(false)
    }
  }

  return (
    <>
      <ImgModal className={modal? "modal open" : "modal"}>
        <BigImg src={tempingSrc}/>
        <CgClose onClick={() => setModal(false)} className="closeIcon"/>
      </ImgModal>
      <GalleryContainer id="gallery">
        <GalleryWrapper>
          <GalleryTitle>Gallery</GalleryTitle>
          <GalleryContents>
            {data.map((item, index) => {
              return (
                <GalleryBox key={index} onClick={()=>getImg(item.imgSrc)}>
                  <GalleryImg src={item.imgSrc} />
                </GalleryBox>
              )
            })}
          </GalleryContents>
        </GalleryWrapper>
      </GalleryContainer>
    </>
  )
}

export default Gallery