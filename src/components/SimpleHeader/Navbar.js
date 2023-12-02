import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { cartItems } from "../../data";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";

const Container = styled.div`
  height: fit-content;;
  padding: 0px;
  display: flex;
  flex-direction: column;
  ${mobile({ display: "none", flexDirection: "column", height: "70px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ display: "none", padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;


const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  height: 30px;
`;


const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const TextLogo = styled.h1`
  font-weight: bold;
`;

const ImageLogo = styled.img`
  height: 60px;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const MenuBarContainer = styled.div`
  background-color: #fff;
  padding: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const MenubarItem = styled.div`
  color: black;
  padding: 20px;
  height: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #337f80;
    color: #ffffff;
  }
`;


const DropdownText = styled.div`
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;


const DropdownMenuItemContainer = styled.div`
  position: relative;
  display: inline-block;
  color: black;
  padding: 20px;
  height: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #337f80;
    color: #ffffff;
  }
`

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 1;

  ${DropdownContainer}:hover & {
    display: block;
  }

  ${DropdownMenuItemContainer}:hover & {
    display: block;
    width: 200px;
    margin-left: -20px;

  }
`;

const DropdownItem = styled.a`
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;




const Navbar = (props) => {
  let [cartCount, setCartCount] = useState(0)

  const { user, logout } = AuthData()

  const navigate = useNavigate()
  const location = useLocation()

  const currentPath = location.pathname
  const currentPathName = currentPath.substring(1, currentPath.length)


  if (props.setCartCount) {
    cartCount = props.cartCount
    setCartCount = props.setCartCount
  }

  if (cartCount === 0 && setCartCount) {
    // load cart from local storage or cookies
    setCartCount(cartItems.length)
  }

  const menuItems = props.menuItems ? props.menuItems : []
  const logo = props.logo ? <ImageLogo src={props.logo} onClick={e => navigate("/")} /> : <TextLogo onClick={e => navigate("/")}> "LOGO."</TextLogo>



  return (
    <>

      <Container>
        <Wrapper>
          <Left> {logo} </Left>
          <Center>
            <SearchContainer>
              <Input placeholder="Search" />
              <Search style={{ color: "gray", fontSize: 16, width: 30 }} />
            </SearchContainer>
          </Center>
          <Right>
            <MenuItem>
              <DropdownContainer>
                <DropdownText>PROFILE</DropdownText>
                {user.isAuthenticated ? (
                  <DropdownContent>
                    <DropdownItem onClick={() => navigate("/profile")}>My Account</DropdownItem>
                    <DropdownItem>Orders</DropdownItem>
                    <DropdownItem onClick={logout}>Logout</DropdownItem>
                  </DropdownContent>
                ) : (
                  <DropdownContent>
                    <DropdownItem onClick={() => navigate("/register")}>Register</DropdownItem>
                    <DropdownItem onClick={() => navigate("/login?redirect" + currentPathName)}>Login</DropdownItem>
                  </DropdownContent>
                )}
              </DropdownContainer>
            </MenuItem>

            <MenuItem onClick={() => navigate("/cart")}>
              <Badge badgeContent={cartCount} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>

          </Right>
        </Wrapper>
        <div>
          <MenuBarContainer>
            {menuItems.map((menuItem) => (<div>
              {(menuItem['categories'] && menuItem['categories'].length > 0) ? (
                <DropdownMenuItemContainer>
                  <DropdownText>{menuItem['title']}</DropdownText>
                  <DropdownContent>
                    {menuItem['categories'].map((category) => (<DropdownItem onClick={e=> navigate(category['path'])}>{category['title']}</DropdownItem>))}
                  </DropdownContent>
                </DropdownMenuItemContainer>
              ) : (
                <MenubarItem onClick={e=> navigate(menuItem['path'])}>{menuItem['title']}</MenubarItem>
              )}
            </div>))}
          </MenuBarContainer>
        </div>
      </Container>


    </>
  );
};

export default Navbar;