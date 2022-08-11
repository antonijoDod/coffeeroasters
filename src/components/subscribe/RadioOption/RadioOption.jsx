import React from "react";
import { Heading } from "@components";
import styled from "styled-components";

const Option = styled.li`
  text-decoration: none;
  padding: 24px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.darkCyan : "#f4f1eb"};
  color: ${({ theme, active }) =>
    active ? "white" : theme.colors.darkGreyBlue};
  border-radius: 8px;
  position: relative;
  &::hover {
    background-color: red;
  }
`;

const Input = styled.input`
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  cursor: pointer;
`;

const RadioOption = ({ title, description, name, value, onChange, state }) => {
  return (
    <Option active={state === value}>
      <Input
        type="radio"
        name={name}
        value={value}
        onClick={(e) => onChange(e.target.value)}
      />
      <Heading.h4>{title}</Heading.h4>
      <p>{description}</p>
    </Option>
  );
};

export default RadioOption;
