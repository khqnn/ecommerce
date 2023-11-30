import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { cartItems } from "../data";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";

const Container = styled.div`
  height: 120px;
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

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ display: "none" })}

`;


const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
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

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownText = styled.div`
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 1;
  width: 100px;

  ${DropdownContainer}:hover & {
    display: block;
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

  if (cartCount == 0 && setCartCount) {
    // load cart from local storage or cookies
    setCartCount(cartItems.length)
  }

  const menuItems = props.menuItems? props.menuItems : []


  return (
    <>

      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo onClick={() => navigate("/")}>LAMA.</Logo>
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
            {menuItems.map((menuItem) => (<MenubarItem onClick={e => navigate(menuItem['path'])}>{menuItem['title']}</MenubarItem>))}
          </MenuBarContainer>
        </div>
      </Container>


    </>
  );
};

export default Navbar;