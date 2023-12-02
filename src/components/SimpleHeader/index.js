import React from 'react'
import Announcement from './Announcement'
import styled from 'styled-components'
import Navbar from './Navbar'
import { mobile } from '../../responsive'
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



const SimpleHeader = (props) => {

    const logo = props.logo
    const menuItems = props.menuItems
    const announcementText = props.announcementText
    const announcementBackground = props.announcementBackground
    const themeColor = props.themeColor

      
    return (
        <Container>
            <Announcement text={announcementText} color={announcementBackground} />
            <NavbarContainer>
                <FullNavbarContainer>
                    <Navbar menuItems={menuItems} logo={logo} themeColor={themeColor} />
                </FullNavbarContainer>
                <MobileNavbarContainer>
                    <NavbarMobile menuItems={menuItems} logo={logo} />
                </MobileNavbarContainer>
            </NavbarContainer>

        </Container>
    )
}

export default SimpleHeader