import React from "react";
import { Header, Footer } from "@components";
import styled from "styled-components";

const Main = styled.main`
  padding: 0 24px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
