import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    background-color: rgba(0,0,0,0.5);
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top:0;
    z-index: 10;
    
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR) `
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div `
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #F7ECE1
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li `
    height: 80px;
`

export const NavLinks =styled(LinkS) `
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #4d7c8a;
    }
`

export const DropdownContent = styled.div `
    display: none;
    position: absolute;
    min-width: 100px;
    z-index: 1;
    top: 80px;
    background-color: rgba(0,0,0,0.8);
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    margin-left: -40px;
`

export const Dropdown = styled.div `
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover ${DropdownContent} {
        display: block;
    }
`

export const DropdownA =styled(LinkS) `
    color: #fff;
    display: block;
    align-items: center;
    text-decoration: none;
    padding-bottom: 5px;
    margin: 10px;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #4d7c8a;
    }

    &.active ${Dropdown} {
        border-bottom: 3px solid #4d7c8a;
    }
`