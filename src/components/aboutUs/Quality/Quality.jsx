import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-top: 260px;
  display: flex;
  flex-direction: column;
  background-color: #2c343e;
  border-radius: 8px;
  padding: 62px 24px;
  position: relative;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row-reverse;
    gap: 125px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 156px;
  width: 100%;
  margin: -140px auto;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 320px;
    margin: -222px auto;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 445px;
    height: 474px;
  }
`;

const Content = styled.div`
  margin-top: 202px;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 270px auto 0 auto;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0;
    width: 100%;
  }
`;

const Quality = () => {
  return (
    <Section>
      <ImageWrapper>
        <Image
          src="/assets/images/cup.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Our commitment"
        />
      </ImageWrapper>
      <Content>
        <h1> Uncompromising quality</h1>
        <p>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </Content>
    </Section>
  );
};

export default Quality;
