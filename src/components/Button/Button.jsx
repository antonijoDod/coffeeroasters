import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 900;
  line-height: 1.4;
  border-radius: 6px;
  border: none;
  background-color: ${({ theme }) => theme.colors.darkCyan};
  color: white;
  font-family: "Fraunces", serif;
  cursor: pointer;
`;

const Button = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default Button;
