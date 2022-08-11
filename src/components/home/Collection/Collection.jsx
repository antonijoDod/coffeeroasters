import React from "react";
import { Heading } from "@components";
import CollectionCard from "./CollectionCard";
import styled from "styled-components";

const CollectionSection = styled.section`
  margin-top: 136px;
  margin-bottom: 200px;
  font-family: "Fraunces", serif;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    text-align: left;
  }
`;

const TopDiv = styled.div`
  text-transform: lowercase;
  line-height: 1;
  font-size: 4rem;
  font-weight: 900;
  text-align: center;
  background: -webkit-linear-gradient(#a6a9ad, #d8d8d7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 7rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 9.5rem;
  }
`;

const BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: -80px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

const Collection = ({ products }) => {
  return (
    <CollectionSection>
      <TopDiv>our collection</TopDiv>
      <BottomDiv>
        {products &&
          products?.map(({ id, ...rest }) => (
            <CollectionCard key={id} {...rest} />
          ))}
      </BottomDiv>
    </CollectionSection>
  );
};

export default Collection;
