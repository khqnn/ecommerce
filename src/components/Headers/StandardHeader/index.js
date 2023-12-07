import styled from "styled-components"
import Navbar from "./Navbar"
import { mobile } from "../../../responsive"
import NavbarMobile from "./NavbarMobile"

const NavbarContainer = styled.div`
`

const FullNavbar = styled.div`
display: block;
${mobile({ display: 'none' })};
`

const MobileNavbar = styled.div`
display: none;
${mobile({display: "block"})};
`

const StandardHeader = ({ settings, logo, menuItems }) => {

    return (
        <NavbarContainer>
            <FullNavbar>
                <Navbar settings={settings} logo={logo} menuItems={menuItems} />
            </FullNavbar>
            <MobileNavbar>
                <NavbarMobile settings={settings} logo={logo} menuItems={menuItems} />
            </MobileNavbar>
        </NavbarContainer>
    )

}

export default StandardHeader