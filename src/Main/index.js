import React, {useState} from 'react'
import Gallery from '../components/Gallery'
import Home from '../components/Home'
import Message from '../components/Message'
import Navbar from '../components/Navbar'
import RSVP from '../components/RSVP'
import Sidebar from '../components/Sidebar'
import Story from '../components/Story'

const Main = () => {
    const [isOpen, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!isOpen)
    }

  return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Home />
        <Story/>
        <Gallery/>
        <RSVP/>
        <Message/>
      </>

  )
}

export default Main