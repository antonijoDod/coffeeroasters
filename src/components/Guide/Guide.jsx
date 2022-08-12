import React from "react";
import { Heading } from "@components";
import styled from "styled-components";

const GuideSection = styled.div`
  padding: 80px 24px;
  background-color: ${({ mode }) => (mode === "dark" ? "#2c343e" : "white")};
  border-radius: 8px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 24px 85px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: ${({ stretch }) => (stretch ? "0px" : "85px")};
    padding-right: ${({ stretch }) => (stretch ? "0px" : "85px")};
  }
`;

const GuideVisual = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    margin-bottom: 82px;
  }
`;

const VisualLine = styled.div`
  width: 75%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.paleOrange}; ;
`;

const GuideContent = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 56px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 10px;
    text-align: left;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 95px;
  }
`;

const GuideCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 33%;
  }
`;

const GuideHeading = styled(Heading.h2)`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 220px;
  }
`;

const GuideText = styled.p`
  color: ${({ mode }) => (mode === "dark" ? "white" : "#2c343e")};
`;

const GuideNumber = styled.div`
  font-family: "Fraunces", serif;
  font-size: 4.5rem;
  line-height: 1;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.paleOrange};
`;

const Guide = ({ mode, stretch }) => {
  return (
    <GuideSection mode={mode} stretch={stretch}>
      <GuideVisual>
        <VisualLine></VisualLine>
      </GuideVisual>
      <GuideContent>
        <GuideCard>
          <GuideNumber>01</GuideNumber>
          <GuideHeading color={mode === "dark" ? "light" : "dark"}>
            Pick your coffee
          </GuideHeading>
          <GuideText mode={mode}>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </GuideText>
        </GuideCard>
        <GuideCard>
          <GuideNumber>02</GuideNumber>
          <GuideHeading color={mode === "dark" ? "light" : "dark"}>
            Choose the frequency
          </GuideHeading>
          <GuideText mode={mode}>
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </GuideText>
        </GuideCard>
        <GuideCard>
          <GuideNumber>03</GuideNumber>
          <GuideHeading color={mode === "dark" ? "light" : "dark"}>
            Receive and enjoy!
          </GuideHeading>
          <GuideText mode={mode}>
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </GuideText>
        </GuideCard>
      </GuideContent>
    </GuideSection>
  );
};

export default Guide;
