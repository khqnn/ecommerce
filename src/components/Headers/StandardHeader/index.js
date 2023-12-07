import styled from "styled-components"
import Navbar from "./Navbar"
import { mobile } from "../../../responsive"
import NavbarMobile from "./NavbarMobile"
import SearchPopup from "./SearchPopup"
import { useState } from "react"
import Announcement from "./Announcement"

const NavbarContainer = styled.div`
`

const FullNavbar = styled.div`
display: block;
${mobile({ display: 'none' })};
`

const MobileNavbar = styled.div`
display: none;
${mobile({ display: "block" })};
`

const StandardHeader = ({ settings, logo, menuItems }) => {

    /**
     * settings: {
            background_color_header,
            text_color_header,
            background_color_hover,
            text_color_hover,
            announcement_text,
            announcement_background
        }
     */

    const [isOpen, setIsOpen] = useState(false)

    const toggleSearchPopup = () => {
        setIsOpen(!isOpen)
    }

    /**
     * 1. search popup [done]
     * 2. mobile responsive [done]
     * adjust search with filters in shop page
     * 3. theme adjustement
     */


    return (
        <NavbarContainer>
            <SearchPopup isOpen={isOpen} setIsOpen={setIsOpen} />
            <FullNavbar>
                <Navbar settings={settings} logo={logo} menuItems={menuItems} toggleSearchPopup={toggleSearchPopup} />
            </FullNavbar>
            <MobileNavbar>
                <NavbarMobile settings={settings} logo={logo} menuItems={menuItems} toggleSearchPopup={toggleSearchPopup} />
            </MobileNavbar>
            <Announcement text={settings.announcement_text} color={settings.announcement_background} />
        </NavbarContainer>
    )

}

export default StandardHeader