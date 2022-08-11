import React from "react";
import { Heading } from "@components";
import styled from "styled-components";
import ChooseUsItem from "./ChooseUsItem";

const Section = styled.section`
  position: relative;
  border-radius: 8px;
  padding: 0 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 87px;
  }
`;

const Background = styled.div`
  position: absolute;
  background-color: #2c343e;
  height: 900px;
  width: 100%;
  left: 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 577px;
  }
`;

const Header = styled.header`
  position: relative;
  text-align: center;
  padding-top: 56px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 100px;
  }
`;

const Text = styled.p`
  position: relative;
  max-width: 540px;
  margin: 0 auto;
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.lightCream};
`;

const Content = styled.ul`
  position: relative;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 70px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

const ChooseUs = ({ options }) => {
  return (
    <Section>
      <Background />
      <Header>
        <Heading.h2 color="light">Why choose us?</Heading.h2>
        <Text>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </Text>
      </Header>
      <Content>
        {options &&
          options?.map(({ id, ...rest }) => (
            <ChooseUsItem key={id} {...rest} />
          ))}
      </Content>
    </Section>
  );
};

export default ChooseUs;
