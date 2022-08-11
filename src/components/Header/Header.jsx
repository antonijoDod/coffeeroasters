import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import NextLink from "next/link";

const HeaderWrapper = styled.header`
  padding: 0 24px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  display: inline-block;
`;

const Navigation = styled.nav`
  position: absolute;
  z-index: 999;
  left: 24px;
  right: 24px;
  top: 64px;
  background: linear-gradient(
    0deg,
    rgba(254, 252, 247, 0.504981) 0%,
    #fefcf7 55.94%
  );
  text-align: center;
  height: calc(100vh - 64px);
  @media (min-width: 768px) {
    background-color: transparent;
    position: inherit;
    height: inherit;
  } ;
`;

const HamburgerButton = styled.div`
  cursor: pointer;
  div {
    margin-top: 3px;
    width: 16px;
    height: 3px;
    border-radius: 1.5px;
    background-color: ${({ theme }) => theme.colors.darkGreyBlue};
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const List = styled.ul`
  list-style-type: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavigationItem = styled.li`
  margin-top: 2rem;
  a {
    font-family: "Fraunces", serif;
    text-decoration: none;
    font-weight: 900;
    font-size: 32px;
    color: ${({ theme }) => theme.colors.darkGreyBlue};
  }
  @media (min-width: 768px) {
    margin: 0 1rem;
    text-transform: uppercase;
    a {
      @media (min-width: 768px) {
        font-family: "Barlow", sans-serif;
        font-size: 0.75rem;
        color: ${({ theme }) => theme.colors.grey};
      }
    }
  }
`;

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefine") {
      function handleResize() {
        if (window.innerWidth > 768) {
          setIsOpenMenu(true);
        } else {
          setIsOpenMenu(false);
        }
      }
      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  if (typeof window !== "undefined") {
    console.log(window.innerWidth);
  }

  return (
    <HeaderWrapper>
      <Row style={{ padding: "32px 0" }}>
        <Column>
          <Image
            src="/assets/svg/logo.svg"
            layout="fixed"
            height="18"
            width="163"
            alt="Cofeeroaster logo"
          />
        </Column>
        <Column>
          <HamburgerButton onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <div></div>
            <div></div>
            <div></div>
          </HamburgerButton>
          {isOpenMenu && (
            <Navigation>
              <List>
                <NavigationItem>
                  <NextLink href="/">
                    <a>Home</a>
                  </NextLink>
                </NavigationItem>
                <NavigationItem>
                  <NextLink href="/">
                    <a>About us</a>
                  </NextLink>
                </NavigationItem>
                <NavigationItem>
                  <NextLink href="/subscribe">
                    <a>Create Your Plan</a>
                  </NextLink>
                </NavigationItem>
              </List>
            </Navigation>
          )}
        </Column>
      </Row>
    </HeaderWrapper>
  );
};

export default Header;
