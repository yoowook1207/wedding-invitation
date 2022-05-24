import React, {useState} from 'react'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
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
        <Home/>
        <Story/>
      </>

  )
}

export default Main