import React, { useState } from 'react'
import styled from 'styled-components'
import { Badge } from "@material-ui/core";

import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { AuthData } from '../../../auth/AuthWrapper';
import { useNavigate } from 'react-router-dom';


const StyledBadge = styled(Badge)({
    "& .MuiBadge-badge": {
        color: props => props.textColor,
        backgroundColor: props => props.backgroundColor,
    }
})

const Container = styled.div`
width: 100vw;
height: 60px;
// margin-bottom: 10px;
box-shadow: 0 4px 14px rgba(0,0,0,.08);
`
const Wrapper = styled.div`
display: flex;
flex-direction: row;
height: 100%;
`

const Left = styled.div`
flex: 1;
`
const Center = styled.div`
flex: 4;
display: flex;
justify-content: center;
`
const Right = styled.div`
flex: 1;
`

const LogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
`

const Logo = styled.img`
height: 50px;
`

const MenuContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
height: 100%;
width: fit-content;
`



const ProfileMenuContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 100%;
`

// Drawer styling

const DrawerContainer = styled.div`
    z-index: 100;
  width: 300px;
  height: 100vh;
  background-color: white;
  position: fixed;
  overflow: auto;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
  transition: left 0.3s ease-in-out;
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  background-color: white;
`;

const DrawerContent = styled.div`
`;

const CloseButton = styled.button`
  background-color: white;
  color: black;
  padding: 10px;
  cursor: pointer;
  border: none;
`;

const MenuDrawerButton = styled.button`
  background-color: white;
  color: black;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  border: none;
`;

const DrawerMenuButtonContainer = styled.div`
padding: 10px;
`

const MenuItem = styled.div`
flex: 1;
width: 100%;
padding: 20px;
display: flex;

&:hover{
    background-color: teal;
    color: white;
}
`

const MenuGroup = styled.div``
const MenuName = styled.div`
flex: 1;
width: 100%;
padding: 20px;
display: flex;
`
const SubMenuContainer = styled.div`
`

const SubMenuItem = styled.div`
flex: 1;
width: 100%;
padding: 20px;
padding-left: 40px;
display: flex;

&:hover{
    background-color: teal;
    color: white;
}
`



const NavbarMobile = ({ settings, logo, menuItems, toggleSearchPopup }) => {

    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate()
    const { user, logout } = AuthData()

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    /**
     * 1. search popup [done]
     * 2. mobile responsive
     * 3. theme adjustement
     */

    return (
        <>
            <Container>
                <Wrapper>
                    <Left>
                        <MenuContainer>
                            <DrawerMenuButtonContainer>
                                <MenuDrawerButton onClick={toggleDrawer}>Menu</MenuDrawerButton>
                            </DrawerMenuButtonContainer>
                            <DrawerContainer isOpen={isOpen}>
                                <DrawerHeader>
                                    <CloseButton onClick={toggleDrawer}>Close</CloseButton>
                                </DrawerHeader>
                                <DrawerContent>
                                    {menuItems.map((menuItem) => (<>
                                        {menuItem['categories'] && menuItem['categories'].length > 0 ? (
                                            <MenuGroup>
                                                <MenuName>{menuItem.title}</MenuName>
                                                <SubMenuContainer>
                                                    {menuItem['categories'].map((cat) => (<SubMenuItem onClick={e => navigate(cat.path)}>{cat.title}</SubMenuItem>))}
                                                </SubMenuContainer>
                                            </MenuGroup>
                                        ) : (<MenuItem onClick={e => navigate(menuItem.path)}>{menuItem.title}</MenuItem>)}
                                    </>))}
                                    {user.isAuthenticated ? <>
                                        <MenuItem>My Account</MenuItem>
                                        <MenuItem>Orders</MenuItem>
                                        <MenuItem onClick={logout}>Logout</MenuItem>
                                    </> : <>
                                        <MenuItem>Register</MenuItem>
                                        <MenuItem onClick={e => navigate("/login")}>Login</MenuItem>
                                    </>}
                                </DrawerContent>
                            </DrawerContainer>
                        </MenuContainer>
                    </Left>
                    <Center>
                        <LogoContainer>
                            <Logo src={logo} onClick={e => navigate("/")} />
                        </LogoContainer>
                    </Center>
                    <Right>
                        <ProfileMenuContainer>
                            <StyledBadge color="primary">
                                <Search onClick={toggleSearchPopup} />
                            </StyledBadge>
                            <StyledBadge color="primary"  onClick={e=> navigate("/cart")}>
                                <ShoppingCartOutlined />
                            </StyledBadge>
                        </ProfileMenuContainer>
                    </Right>
                </Wrapper>
            </Container>
        </>
    )
}

export default NavbarMobile