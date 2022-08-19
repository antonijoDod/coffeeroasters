import React from "react";
import Image from "next/image";
import { Heading } from "@components";
import styled from "styled-components";

const Section = styled.section`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    text-align: left;
    align-items: center;
    gap: 69px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    text-align: left;
    align-items: center;
    gap: 125px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 400px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 470px;
    min-width: 280px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 520px;
    min-width: 445px;
  }
`;

const Text = styled.p`
  margin-top: 28px;
  color: #333d4b;
`;

const OurCommitment = () => {
  return (
    <Section>
      <ImageWrapper>
        <Image
          src="/assets/images/us.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Our commitment"
        />
      </ImageWrapper>
      <div>
        <Heading.h2>Our commitment</Heading.h2>
        <Text>
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </Text>
      </div>
    </Section>
  );
};

export default OurCommitment;
