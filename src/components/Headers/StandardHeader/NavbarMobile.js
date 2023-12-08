import React, { useState } from 'react'
import styled from 'styled-components'
import { Badge } from "@material-ui/core";

import { Search, ShoppingCartOutlined, Menu, Close } from "@material-ui/icons";
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
// box-shadow: 0 4px 14px rgba(0,0,0,.08);
`
const Wrapper = styled.div`
display: flex;
flex-direction: row;
height: 100%;
background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : 'none'};
color: ${({ textColor }) => textColor ? textColor : 'black'};
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
  right: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
  transition: right 0.3s ease-in-out;
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  
background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : 'none'};
color: ${({ textColor }) => textColor ? textColor : 'black'};
`;

const DrawerContent = styled.div`
`;

const CloseButton = styled.button`
  color: black;
  padding: 10px;
  cursor: pointer;
  border: none;

background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : 'none'};
color: ${({ textColor }) => textColor ? textColor : 'black'};
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

 background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : 'none'};
  color: ${({ textColor }) => textColor ? textColor : 'black'};
  
  &:hover {
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor ? hoverBackgroundColor : 'gray'};
    color: ${({ hoverTextColor }) => hoverTextColor ? hoverTextColor : 'white'};
  }
`

const MenuGroup = styled.div``
const MenuName = styled.div`
flex: 1;
width: 100%;
padding: 20px;
display: flex;

 background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : 'none'};
  color: ${({ textColor }) => textColor ? textColor : 'black'};
  
  &:hover {
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor ? hoverBackgroundColor : 'gray'};
    color: ${({ hoverTextColor }) => hoverTextColor ? hoverTextColor : 'white'};
  }
`
const SubMenuContainer = styled.div`
`

const SubMenuItem = styled.div`
flex: 1;
width: 100%;
padding: 20px;
padding-left: 40px;
display: flex;

 background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : 'none'};
  color: ${({ textColor }) => textColor ? textColor : 'black'};
  
  &:hover {
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor ? hoverBackgroundColor : 'gray'};
    color: ${({ hoverTextColor }) => hoverTextColor ? hoverTextColor : 'white'};
  }
`



const NavbarMobile = ({ settings, logo, menuItems, toggleSearchPopup }) => {

    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate()
    const { user, logout } = AuthData()

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const {
        background_color_header,
        text_color_header,
        background_color_hover,
        text_color_hover,
        announcement_text,
        announcement_background
    } = settings


    return (
        <>
            <Container>
                <Wrapper backgroundColor={background_color_header} textColor={text_color_header}>
                    <Left>
                        <MenuContainer>
                            <DrawerMenuButtonContainer>
                                <MenuDrawerButton onClick={toggleDrawer}>
                                    <StyledBadge color="primary">
                                        <Menu />
                                    </StyledBadge>
                                </MenuDrawerButton>
                            </DrawerMenuButtonContainer>
                            <DrawerContainer isOpen={isOpen}>
                                <DrawerHeader backgroundColor={background_color_header} textColor={text_color_header}>
                                    <CloseButton backgroundColor={background_color_header} textColor={text_color_header} onClick={toggleDrawer}>
                                    <StyledBadge color="primary">
                                        <Close />
                                    </StyledBadge>
                                    </CloseButton>
                                </DrawerHeader>
                                <DrawerContent>
                                    {menuItems.map((menuItem) => (<>
                                        {menuItem['categories'] && menuItem['categories'].length > 0 ? (
                                            <MenuGroup>
                                                <MenuName backgroundColor={background_color_header} textColor={text_color_header} hoverBackgroundColor={background_color_hover} hoverTextColor={text_color_hover}>{menuItem.title}</MenuName>
                                                <SubMenuContainer>
                                                    {menuItem['categories'].map((cat) => (<SubMenuItem backgroundColor={background_color_header} textColor={text_color_header} hoverBackgroundColor={background_color_hover} hoverTextColor={text_color_hover} onClick={e => navigate(cat.path)}>{cat.title}</SubMenuItem>))}
                                                </SubMenuContainer>
                                            </MenuGroup>
                                        ) : (<MenuItem backgroundColor={background_color_header} textColor={text_color_header} hoverBackgroundColor={background_color_hover} hoverTextColor={text_color_hover} onClick={e => navigate(menuItem.path)}>{menuItem.title}</MenuItem>)}
                                    </>))}
                                    {user.isAuthenticated ? <>
                                        <MenuItem backgroundColor={background_color_header} textColor={text_color_header} hoverBackgroundColor={background_color_hover} hoverTextColor={text_color_hover}>My Account</MenuItem>
                                        <MenuItem backgroundColor={background_color_header} textColor={text_color_header} hoverBackgroundColor={background_color_hover} hoverTextColor={text_color_hover}>Orders</MenuItem>
                                        <MenuItem backgroundColor={background_color_header} textColor={text_color_header} hoverBackgroundColor={background_color_hover} hoverTextColor={text_color_hover} onClick={logout}>Logout</MenuItem>
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
                            <StyledBadge color="primary" onClick={e => navigate("/cart")}>
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