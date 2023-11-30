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

const MobileContainer = styled.div`
  height: 50px;
  padding: 20px;
  display: none;
  ${mobile({ display: "flex", flexDirection: "column", height: "70px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ display: "none", padding: "10px 0px" })}
`;

const MobileWrapper = styled.div`
padding: 10px 20px;
display: none;
align-items: center;
justify-content: space-between;
${mobile({ display: "flex", padding: "10px 0px" })}
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

const MobileSearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: none;
  align-items: center;
  padding: 5px;
  ${mobile({ display: "flex" })}
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

const DrawerContainer = styled.div`
  width: 300px;
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
  padding: 20px;
  cursor: pointer;
  &:hover {
    background-color: #337f80;
    color: #ffffff;
  }
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


const Menubar = (props) => {
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

  if (cartCount == 0 && setCartCount) {
    // load cart from local storage or cookies
    setCartCount(cartItems.length)
  }

  const navigateToStaticPage = (page) => {
    navigate(page)
  }

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuItemClick = (item) => {
    // Handle menu item click logic (e.g., navigate to a different page)

    if (item == "logout") {
      logout()
      navigate("/")
    }
  };


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
            <Logo onClick={e => navigateToStaticPage("/")}>LAMA.</Logo>
          </Center>
          <Right>
            <MenuItem> <DropdownContainer>
              <DropdownText>PROFILE</DropdownText>
              {user.isAuthenticated ? <DropdownContent>
                <DropdownItem onClick={e => navigateToStaticPage("/profile")}>My Account</DropdownItem>
                <DropdownItem>Orders</DropdownItem>
                <DropdownItem onClick={logout}>Logout</DropdownItem>
              </DropdownContent> : <DropdownContent>
                <DropdownItem onClick={e => navigateToStaticPage("/register")}>Register</DropdownItem>
                <DropdownItem onClick={e => navigateToStaticPage("/login")}>Login</DropdownItem>
              </DropdownContent>}
            </DropdownContainer></MenuItem>
            <MenuItem onClick={e => navigateToStaticPage("/cart")}>
              <Badge badgeContent={cartCount} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>

          </Right>
        </Wrapper>
        <div>
          <MenuBarContainer>
            <MenubarItem>Home</MenubarItem>
            <MenubarItem>Categories</MenubarItem>
            <MenubarItem>About</MenubarItem>
            <MenubarItem>Contact</MenubarItem>
          </MenuBarContainer>
        </div>
      </Container>

      <MobileContainer>

        <MobileWrapper>
          <Left>
            <DrawerContainer open={drawerOpen}>
              <DrawerContent>
                <DrawerCloseButton onClick={toggleDrawer}>Close</DrawerCloseButton>
                <DrawerMenu>
                  <DrawerMenuItem onClick={() => handleMenuItemClick('Home')}>Home</DrawerMenuItem>
                  <DrawerMenuItem onClick={() => handleMenuItemClick('Categories')}>Categories</DrawerMenuItem>
                  <DrawerMenuItem onClick={() => handleMenuItemClick('About')}>About</DrawerMenuItem>
                  <DrawerMenuItem onClick={() => handleMenuItemClick('Contact')}>Contact</DrawerMenuItem>
                  <br />
                  <hr />
                  {user.isAuthenticated ? <>
                    <DrawerMenuItem onClick={e => navigateToStaticPage("/profile")}>My Account</DrawerMenuItem>
                    <DrawerMenuItem>Orders</DrawerMenuItem>
                    <DrawerMenuItem onClick={logout}>Logout</DrawerMenuItem>
                  </> : <>
                    <DrawerMenuItem onClick={e => navigateToStaticPage("/register")}>Register</DrawerMenuItem>
                    <DrawerMenuItem onClick={e => navigateToStaticPage("/login")}>Login</DrawerMenuItem>
                  </>}
                </DrawerMenu>

              </DrawerContent>
            </DrawerContainer>
            <DrawerToggleBtn onClick={toggleDrawer}>MENU</DrawerToggleBtn>

          </Left>
          <Center>
            <Logo onClick={e => navigateToStaticPage("/")}>LAMA.</Logo>
          </Center>
          <Right>
            <MenuItem onClick={e => navigateToStaticPage("/cart")}>
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

export default Menubar;