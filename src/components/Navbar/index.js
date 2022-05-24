import React, {useState, useEffect} from 'react'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,} from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
      window.addEventListener('scroll', changeNav)
    }, []);
    
    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <>
        <IconContext.Provider value={{ color:'#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}> SUNGWOOK & SEMI</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='our-story'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Our Story</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='gallery'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Gallery</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='rsvp'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >RSVP</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='message'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Message Us</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    </>
  );
}

export default Navbar