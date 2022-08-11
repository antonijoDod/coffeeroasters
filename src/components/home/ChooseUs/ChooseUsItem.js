import React from "react";
import Image from "next/image";
import { Heading } from "@components";
import styled from "styled-components";

const Item = styled.li`
  list-style-type: none;
  padding: 52px 12px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 56px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.darkCyan};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    padding: 38px 55px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  min-height: 56px;
  min-width: 56px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 32px;
  }
`;

const Text = styled.p`
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.lightCream};
`;

const ChooseUsItem = ({ title, description, image }) => {
  return (
    <Item>
      <ImageWrapper>
        <Image
          src={image}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          alt={title}
        />
      </ImageWrapper>
      <div>
        <Heading.h4 color="light">{title}</Heading.h4>
        <Text>{description}</Text>
      </div>
    </Item>
  );
};

export default ChooseUsItem;
