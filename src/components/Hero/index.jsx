import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { Heading } from "@components";

const HeroSection = styled.section`
  height: 500px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 600px;
  }
`;

const HeroContent = styled.div`
  position: relative;
  width: 100%;
  padding: 24px;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
    padding: 58px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 85px;
  }
`;

const HeroTitle = styled(Heading.h1)`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 500px;
    text-align: left;
  }
`;

const HeroText = styled.p`
  color: white;
  padding: 24px 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
    padding: 58px 0;
    max-width: 445px;
  }
`;

const Hero = ({ title, color, description, image, children }) => {
  return (
    <HeroSection>
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        alt="Hero background"
      />
      <HeroContent>
        <HeroTitle color={color}>{title}</HeroTitle>
        <HeroText>{description}</HeroText>
        {children}
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
