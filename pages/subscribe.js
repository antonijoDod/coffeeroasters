import React, { useState } from "react";
import { Hero, Layout, Heading } from "@components";
import { SubscribeForm } from "@components/subscribe";
import styled from "styled-components";

const FormSection = styled.section`
  display: flex;
`;

const GuideSection = styled.section`
  margin: 120px 0;
  padding: 80px 24px;
  background-color: #2c343e;
  border-radius: 8px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 144px 0;
    padding: 100px 40px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 168px 0;
    padding: 100px 85px;
  }
`;

const GuideVisual = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    margin-bottom: 82px;
  }
`;

const VisualLine = styled.section`
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

const GuideNumber = styled.div`
  font-family: "Fraunces", serif;
  font-size: 4.5rem;
  line-height: 1;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.paleOrange};
`;

const Filter = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
    width: 33.33%;
  }
`;

const Subscribe = () => {
  return (
    <Layout>
      <Hero image="/assets/images/hero-subscribe.png">
        <Heading.h1 color="light">Create plan</Heading.h1>
        <p style={{ color: "white", padding: "24px 0" }}>
          Coffee the way you wanted it to be. For coffee delivered tomorrow, or
          next week. For whatever brew method you use. For choice, for
          convenience, for quality.
        </p>
      </Hero>
      <GuideSection>
        <GuideVisual>
          <VisualLine></VisualLine>
        </GuideVisual>
        <GuideContent>
          <GuideCard>
            <GuideNumber>01</GuideNumber>
            <GuideHeading color="light">Pick your coffee</GuideHeading>
            <p style={{ color: "white" }}>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </GuideCard>
          <GuideCard>
            <GuideNumber>02</GuideNumber>
            <GuideHeading color="light">Choose the frequency</GuideHeading>
            <p style={{ color: "white" }}>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </GuideCard>
          <GuideCard>
            <GuideNumber>03</GuideNumber>
            <GuideHeading color="light">Receive and enjoy!</GuideHeading>
            <p style={{ color: "white" }}>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </GuideCard>
        </GuideContent>
      </GuideSection>
      <FormSection>
        <Filter>Left</Filter>
        <SubscribeForm />
      </FormSection>
    </Layout>
  );
};

export default Subscribe;
