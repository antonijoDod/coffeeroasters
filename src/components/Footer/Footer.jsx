import React from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ImageWrapper = styled.div`
  margin: 0 auto;
`;

const FooterWrapper = styled.footer`
  margin: 0 24px;
  margin-top: 120px;
  padding: 55px;
  background-color: #2c343e;
  display: flex;
  flex-direction: column;
  gap: 48px;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    align-items: center;
  }
`;

const MenuList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 34px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

const MenuItem = styled.li`
  font-size: 0.75rem;
  color: white;
`;

const MenuLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const SocialIcons = styled.ul`
  list-style-type: none;
  gap: 24px;
  display: flex;
  margin: 0 auto;
  color: white;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0 0;
  }
`;

const SocialIcon = styled.li``;

const Footer = () => {
  return (
    <FooterWrapper>
      <Content>
        <ImageWrapper>
          <Image
            layout="fixed"
            src="/assets/svg/logo-white.svg"
            height="26"
            width="236"
            alt="logo"
          />
        </ImageWrapper>
        <MenuList>
          <MenuItem>
            <Link href="/">
              <MenuLink>MENU</MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/about-us">
              <MenuLink>ABOUT US</MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/subscribe">
              <MenuLink>CREATE YOU PLAN</MenuLink>
            </Link>
          </MenuItem>
        </MenuList>
      </Content>
      <SocialIcons>
        <SocialIcon>
          <Link href="www.facebook.com">
            <FaFacebookSquare style={{ height: 24, width: 24 }} />
          </Link>
        </SocialIcon>
        <SocialIcon>
          <Link href="www.twitter.com">
            <FaTwitter style={{ height: 24, width: 24 }} />
          </Link>
        </SocialIcon>
        <SocialIcon>
          <Link href="www.instagram.com">
            <FaInstagramSquare style={{ height: 24, width: 24 }} />
          </Link>
        </SocialIcon>
      </SocialIcons>
    </FooterWrapper>
  );
};

export default Footer;
