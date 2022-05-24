import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to ='our-story' onClick={toggle}>
                    Our Story
                </SidebarLink>
                <SidebarLink to ='gallery' onClick={toggle}>
                    Gallery
                </SidebarLink>
                <SidebarLink to ='rsvp' onClick={toggle}>
                    RSVP
                </SidebarLink>
                <SidebarLink to ='registry' onClick={toggle}>
                    Registry
                </SidebarLink>
                <SidebarLink to ='contact' onClick={toggle}>
                    Contact Us
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar