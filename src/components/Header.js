import React from 'react'
import Announcement from './Announcement'
import styled from 'styled-components'
import Navbar from './Navbar'
import { mobile } from '../responsive'
import NavbarMobile from './NavbarMobile'

const Container = styled.div`
width: 100%;
`

const NavbarContainer = styled.div`
`

const FullNavbarContainer = styled.div`
    display: flex;
    flex-direction: column;
${mobile({ display: "none" })}

`
const MobileNavbarContainer = styled.div`
display: none;
${mobile({ display: "flex", flexDirection: "column" })}
`

const Header = () => {

    const menuItems = [
        {
            "title": "Home",
            "path": "/",
        },
        {
            "title": "Categories",
            "path": "/categories",
        },
        {
            "title": "About",
            "path": "/about",
        },
        {
            "title": "Contact",
            "path": "/contact",
        },
    ]

    return (
        <Container>
            <Announcement />
            <NavbarContainer>
                <FullNavbarContainer>
                    <Navbar menuItems={menuItems} />
                </FullNavbarContainer>
                <MobileNavbarContainer>
                    <NavbarMobile menuItems={menuItems} />
                </MobileNavbarContainer>
            </NavbarContainer>

        </Container>
    )
}

export default Header