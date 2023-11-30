import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.div`
  // background-color: #3498db;
  // color: #fff;
  // padding: 10px 20px;
  // font-size: 16px;
  // border: none;
  // border-radius: 4px;
  // cursor: pointer;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 1;

  ${DropdownContainer}:hover & {
    display: block;
  }
`;

const CategoryItem = styled.a`
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const categories = ['My Account', 'Orders', 'Wishlist', 'Login', 'Logout'];

const ProfileMenu = () => {
  return (
    <DropdownContainer>
      <DropdownButton>PROFILE</DropdownButton>
      <DropdownContent>
        {categories.map((category) => (
          <CategoryItem key={category} href="#">
            {category}
          </CategoryItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default ProfileMenu;
