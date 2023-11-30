import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';

const ThankYouContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding-top: 200px;
  height: 500px;
//   border: 1px solid #ddd;
//   border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ThankYouHeading = styled.h2`
  color: #3498db;
`;

const ThankYouMessage = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const BackToHomeLink = styled.a`
  display: inline-block;
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

const ThankYouPage = () => {
    return (
        <>
            <Navbar />
            <Announcement />
            <ThankYouContainer>
                <ThankYouHeading>Thank You!</ThankYouHeading>
                <ThankYouMessage>Your order has been successfully placed.</ThankYouMessage>
                <BackToHomeLink href="/">Back to Home</BackToHomeLink>
            </ThankYouContainer>
            <Footer />
        </>

    );
};

export default ThankYouPage;
