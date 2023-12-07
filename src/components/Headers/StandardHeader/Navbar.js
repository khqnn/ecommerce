import React, { useState } from 'react'
import styled from 'styled-components'
import { Badge } from "@material-ui/core";

import { Search, ShoppingCartOutlined, Person } from "@material-ui/icons";
import { useNavigate } from 'react-router-dom';
import { AuthData } from '../../../auth/AuthWrapper';



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
margin-left: 40px;
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
padding: 20px 10px;
display: flex;
justify-content: center;
align-items: center;

&:hover{
    background-color: teal;
    color: white;
}
`

const ProfileMenuContainer = styled.div`
display: flex;
align-items: center;
justify-content: end;
margin-right: 40px;
height: 100%;
`

const DropdownText = styled.div`
flex: 1;
width: 80px;
padding: 20px 10px;
display: flex;
justify-content: center;
align-items: center;
&:hover{
    background-color: teal;
    color: white;
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
`;


const DropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  background-color: gray;
  color: white;

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
  color: black;
  background-color: #f4f4f4;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: teal;
    color: white;
  }
`;

const StyledBadge = styled(Badge)({
    "& .MuiBadge-badge": {
        color: props => props.textColor,
        backgroundColor: props => props.backgroundColor,
    }
})


const Navbar = ({ settings, logo, menuItems, toggleSearchPopup }) => {


    const navigate = useNavigate()
    const { user, logout } = AuthData()

    return (
        <>
            <Container>
                <Wrapper>
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
                                            <DropdownText>{menuItem.title}</DropdownText>
                                            <DropdownContent >
                                                {menuItem['categories'].map((cat) => (<DropdownItem onClick={e => navigate(cat.path)}>{cat.title}</DropdownItem>))}
                                            </DropdownContent>
                                        </DropdownContainer>
                                    ) : (
                                        <MenuItem onClick={e => navigate(menuItem.path)}>{menuItem.title}</MenuItem>
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
                                <DropdownContent>
                                    {user.isAuthenticated ? <>
                                        <DropdownItem>My Account</DropdownItem>
                                        <DropdownItem >Orders</DropdownItem>
                                        <DropdownItem onClick={logout}>Logout</DropdownItem>
                                    </> : <>
                                        <DropdownItem>Register</DropdownItem>
                                        <DropdownItem onClick={e => navigate("/login")}>Login</DropdownItem>
                                    </>}
                                </DropdownContent>
                            </DropdownContainer>
                            <StyledBadge color="primary" onClick={e=> navigate("/cart")}>
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