import React from "react";
import { Heading } from "@components";
import styled from "styled-components";
import Image from "next/image";

const Card = styled.div`
  margin: 24px;
  display: flex;
  text-align: center;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    text-align: left;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 150px;
  width: 200px;
  margin: 0 auto;
  margin-bottom: 16px;
`;

const Description = styled.p`
  margin-top: 16px;
`;

const CollectionCard = ({ image, title, description }) => {
  return (
    <Card>
      <ImageWrapper>
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </ImageWrapper>
      <div>
        <Heading.h4 color="dark">{title}</Heading.h4>
        <Description>{description}</Description>
      </div>
    </Card>
  );
};

export default CollectionCard;
