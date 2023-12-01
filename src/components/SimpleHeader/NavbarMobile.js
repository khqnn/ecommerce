import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { cartItems } from "../../data";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";


const MobileContainer = styled.div`
  height: fit-content;
  padding: 20px;
  display: flex;
  flex-direction: column;

`;

const MobileWrapper = styled.div`
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const MobileSearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const TextLogo = styled.h1`
  font-weight: bold;
  font-size: 24px;
`;

const ImageLogo = styled.img`
  height: 50px;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const MenuItem = styled.div`
  font-size: 12px;
  cursor: pointer;
  margin-left: 10px;
`;

const DrawerContainer = styled.div`
  width: 250px;
  height: 100%;
  background-color: #fff;
  color: white;
  position: fixed;
  top: 0;
  left: ${(props) => (props.open ? '0' : '-300px')};
  transition: left 0.3s ease-in-out;
  z-index: 100;
  padding-top: 60px; /* Adjust the top padding as needed */
`;

const DrawerContent = styled.div`
  padding: 0px;
`;

const DrawerCloseButton = styled.div`
  color: black;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const DrawerToggleBtn = styled.div`
  cursor: pointer;
`;


const DrawerMenu = styled.ul`
  list-style: none;
  padding: 0;
`;

const DrawerMenuItem = styled.li`
  color: black;
  padding-left: 20px;
  padding-top: 20px;
  cursor: pointer;
  &:hover {
    background-color: #337f80;
    color: #ffffff;
  }
`;


const NavbarMobile = (props) => {
  let [cartCount, setCartCount] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false);



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

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };


  const logo = props.logo ? <ImageLogo src={props.logo} onClick={e=> navigate("/")} /> : <TextLogo onClick={e=> navigate("/")}>LOGO.</TextLogo>
  const menuItems = props.menuItems ? props.menuItems : []

  return (
    <>
      <MobileContainer>

        <MobileWrapper>
          <Left>
            <DrawerContainer open={drawerOpen}>
              <DrawerContent>
                <DrawerCloseButton onClick={toggleDrawer}>Close</DrawerCloseButton>
                <DrawerMenu>
                  {menuItems.map((menuItem) => (<DrawerMenuItem onClick={e => navigate(menuItem['path'])}>{menuItem['title']}</DrawerMenuItem>))}

                  {user.isAuthenticated ? <>
                    <DrawerMenuItem onClick={e => navigate("/profile")}>My Account</DrawerMenuItem>
                    <DrawerMenuItem>Orders</DrawerMenuItem>
                    <DrawerMenuItem onClick={logout}>Logout</DrawerMenuItem>
                  </> : <>
                    <DrawerMenuItem onClick={e => navigate("/register")}>Register</DrawerMenuItem>
                    <DrawerMenuItem onClick={e => navigate("/login?redirect=" + currentPathName)}>Login</DrawerMenuItem>
                  </>}
                </DrawerMenu>

              </DrawerContent>
            </DrawerContainer>
            <DrawerToggleBtn onClick={toggleDrawer}>MENU</DrawerToggleBtn>

          </Left>
          <Center> {logo} </Center>
          <Right>
            <MenuItem onClick={e => navigate("/cart")}>
              <Badge badgeContent={cartCount} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Right>

        </MobileWrapper>
        <MobileSearchContainer>
          <Input placeholder="Search" />
          <Search style={{ color: "gray", fontSize: 16 }} />
        </MobileSearchContainer>
      </MobileContainer>
    </>
  );
};

export default NavbarMobile;