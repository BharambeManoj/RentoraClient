
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background: transparent;
  position: relative;
  z-index: 10;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: white;
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  text-align: center;
  color: white;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Copyright>&copy; 2024 Manoj Bharambe. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
