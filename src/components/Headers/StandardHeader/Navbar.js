import React, { useState } from 'react'
import styled from 'styled-components'
import { Badge } from "@material-ui/core";

import { Search, ShoppingCartOutlined, Person } from "@material-ui/icons";
import { useNavigate } from 'react-router-dom';
import { AuthData } from '../../../auth/AuthWrapper';

const StyledBadge = styled(Badge)({
    "& .MuiBadge-badge": {
        color: props => props.textColor,
        backgroundColor: props => props.backgroundColor,
    }
})

const Container = styled.div`
width: 100vw;
height: 60px;
box-shadow: 0 4px 14px rgba(0,0,0,.08);
`
const Wrapper = styled.div`
display: flex;
flex-direction: row;
height: 100%;
background-color: ${({backgroundColor})=> backgroundColor? backgroundColor : 'none'};
color: ${({textColor})=> textColor? textColor : 'black'};

`

const Left = styled.div`
flex: 1;
`
const Center = styled.div`
flex: 2;
display: flex;
justify-content: center;
`
const Right = styled.div`
flex: 1;
`

const LogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: start;
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

const MenuItem = styled.div`
flex: 1;
width: 80px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({backgroundColor})=> backgroundColor? backgroundColor: 'none'};
color: ${({textColor})=> textColor? textColor: 'black'};


&:hover{
    background-color: ${({hoverBackgroundColor})=> hoverBackgroundColor? hoverBackgroundColor: 'gray'};
    color: ${({hoverTextColor})=> hoverTextColor? hoverTextColor: 'white'};
}
`

const ProfileMenuContainer = styled.div`
display: flex;
align-items: center;
justify-content: end;
height: 100%;
`

const DropdownText = styled.div`
flex: 1;
width: 80px;
height: 100%;

// padding: 20px 10px;
display: flex;
justify-content: center;
align-items: center;
&:hover{
    background-color: ${({hoverBackgroundColor})=> hoverBackgroundColor? hoverBackgroundColor: 'gray'};
    color: ${({hoverTextColor})=> hoverTextColor? hoverTextColor: 'white'};
}
`;

const DropdownIcon = styled.div`
flex: 1;
width: 80px;
padding: 20px 10px;
display: flex;
justify-content: center;
align-items: center;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
`;


const DropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 100%;
background-color: ${({backgroundColor})=> backgroundColor? backgroundColor: 'none'};
color: ${({textColor})=> textColor? textColor: 'black'};

  z-index: 100;
  

  ${DropdownContainer}:hover & {
    display: block;
  }


`;

const DropdownItem = styled.a`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 200px;
  height: 40px;

  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({hoverBackgroundColor})=> hoverBackgroundColor? hoverBackgroundColor: 'gray'};
    color: ${({hoverTextColor})=> hoverTextColor? hoverTextColor: 'white'};
  }
`;


const Navbar = ({ settings, logo, menuItems, toggleSearchPopup }) => {

    const navigate = useNavigate()
    const { user, logout } = AuthData()


    const {
        background_color_header,
        text_color_header,
        background_color_hover,
        text_color_hover,
        announcement_text,
        announcement_background
    } = settings

    console.log(settings);

    return (
        <>
            <Container>
                <Wrapper className='margin-medium' backgroundColor={background_color_header} textColor={text_color_header}>
                    <Left>
                        <LogoContainer>
                            <Logo src={logo} onClick={e => navigate("/")} />
                        </LogoContainer>
                    </Left>
                    <Center>
                        <MenuContainer>
                            {menuItems.map((menuItem) => (
                                <>
                                    {(menuItem['categories'] && menuItem['categories'].length > 0) ? (
                                        <DropdownContainer>
                                            <DropdownText backgroundColor={background_color_header} textColor={text_color_header} hoverBackgroundColor={background_color_hover} hoverTextColor={text_color_hover}>{menuItem.title}</DropdownText>
                                            <DropdownContent backgroundColor={background_color_header} textColor={text_color_header} >
                                                {menuItem['categories'].map((cat) => (<DropdownItem hoverBackgroundColor={background_color_hover} hoverTextColor={text_color_hover} onClick={e => navigate(cat.path)}>{cat.title}</DropdownItem>))}
                                            </DropdownContent>
                                        </DropdownContainer>
                                    ) : (
                                        <MenuItem backgroundColor={background_color_header} textColor={text_color_header} hoverBackgroundColor={background_color_hover} hoverTextColor={text_color_hover} onClick={e => navigate(menuItem.path)}>{menuItem.title}</MenuItem>
                                    )}
                                </>
                            ))}
                        </MenuContainer>
                    </Center>
                    <Right>
                        <ProfileMenuContainer>
                            <StyledBadge color="primary">
                                <Search onClick={toggleSearchPopup} />
                            </StyledBadge>
                            <DropdownContainer>
                                <DropdownIcon>
                                    <StyledBadge color="primary" >
                                        <Person />
                                    </StyledBadge>
                                </DropdownIcon>

                                <DropdownContent backgroundColor={background_color_header} textColor={text_color_header} >
                                    {user.isAuthenticated ? <>
                                        <DropdownItem >My Account</DropdownItem>
                                        <DropdownItem hoverBackgroundColor={background_color_hover} hoverTextColor={text_color_hover}>Orders</DropdownItem>
                                        <DropdownItem hoverBackgroundColor={background_color_hover} hoverTextColor={text_color_hover} onClick={logout}>Logout</DropdownItem>
                                    </> : <>
                                        <DropdownItem hoverBackgroundColor={background_color_hover} hoverTextColor={text_color_hover}>Register</DropdownItem>
                                        <DropdownItem hoverBackgroundColor={background_color_hover} hoverTextColor={text_color_hover} onClick={e => navigate("/login")}>Login</DropdownItem>
                                    </>}
                                </DropdownContent>
                            </DropdownContainer>
                            <StyledBadge backgroundColor={background_color_hover} badgeContent='2' color="primary" onClick={e=> navigate("/cart")}>
                                <ShoppingCartOutlined />
                            </StyledBadge>
                        </ProfileMenuContainer>
                    </Right>
                </Wrapper>
            </Container>
        </>
    )
}

export default Navbar