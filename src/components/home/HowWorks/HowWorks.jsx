import React from "react";
import { Heading, Button, Guide } from "@components";
import styled from "styled-components";

const Section = styled.section`
  margin-top: 200px;
  margin-bottom: 200px;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
  }
`;

const HowWorks = () => {
  return (
    <Section>
      <Heading.h4>How it works</Heading.h4>
      <Guide stretch />
      <Button>Create your plane</Button>
    </Section>
  );
};

export default HowWorks;
