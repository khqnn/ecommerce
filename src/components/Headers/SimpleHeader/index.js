import React from 'react'
import Announcement from './Announcement'
import styled from 'styled-components'
import Navbar from './Navbar'
import { mobile } from '../../../responsive'
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

    /**
     * settins: {
        background_color_navbar,
        text_color_navbar,
        background_color_menubar,
        text_color_menubar,
        background_color_hover,
        text_color_hover,
        announcement_text,
        announcement_background
     }
     * logo: string
     * menuItems: []
     */

    const logo = props.logo
    const menuItems = props.menuItems

    /**
     * Validate and set default header values here....
     */

    const settings = props.settings
      
    return (
        <Container>
            <Announcement text={settings.announcement_text} color={settings.announcement_background} />
            <NavbarContainer>
                <FullNavbarContainer>
                    <Navbar settings={settings} menuItems={menuItems} logo={logo} />
                </FullNavbarContainer>
                <MobileNavbarContainer>
                    <NavbarMobile settings={settings} menuItems={menuItems} logo={logo} />
                </MobileNavbarContainer>
            </NavbarContainer>

        </Container>
    )
}

export default SimpleHeader