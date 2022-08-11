import styled from "styled-components";

/* 
heading
pageHeading
sectionHeading
*/

const h1 = styled.h1`
  line-height: 1;
  font-size: 2.5rem;
  color: ${({ color, theme }) =>
    color === "light" ? theme.colors.lightCream : theme.colors.darkGreyBlue};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 4.5rem;
  }
`;

const h2 = styled.h2`
  font-size: 2rem;
  line-height: 48px;
  color: ${({ color, theme }) =>
    color === "light" ? theme.colors.lightCream : theme.colors.darkGreyBlue};
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 40px;
  }
`;

const h4 = styled.h4`
  font-size: 1.5rem;
  line-height: 1.33;
  font-weight: 900;
  color: ${({ color, theme }) =>
    color === "light" ? theme.colors.lightCream : theme.colors.darkGreyBlue};
`;

const Heading = {
  h1,
  h2,
  h4,
};

export default Heading;
