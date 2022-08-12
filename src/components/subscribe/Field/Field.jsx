import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Heading } from "@components";
import { RadioOption } from "@components/subscribe";

const FormLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  cursor: pointer;
`;

const Options = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 16px;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const Field = ({ title, children, defaultOpen, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (defaultOpen) {
      setIsOpen(true);
    } else {
      false;
    }
  }, [defaultOpen]);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <FormLabel onClick={handleIsOpen} {...rest}>
        <Heading.h4>{title}</Heading.h4>
        <Image
          src={
            isOpen ? "/assets/svg/arrow-up.svg" : "/assets/svg/arrow-down.svg"
          }
          layout="fixed"
          height="12"
          width="18"
          alt="Arrow up"
        />
      </FormLabel>
      {isOpen && <Options>{children}</Options>}
    </>
  );
};

export default Field;
