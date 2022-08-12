import React, { useState } from "react";
import { Hero, Layout, Heading, Guide } from "@components";
import { SubscribeForm } from "@components/subscribe";
import styled from "styled-components";

const GuideSection = styled.section`
  margin-top: 120px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 168px;
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
        <Guide mode="dark" />
      </GuideSection>
      <SubscribeForm />
    </Layout>
  );
};

export default Subscribe;
