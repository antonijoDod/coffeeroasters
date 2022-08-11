import "@styles/main.css";
import "@fontsource/fraunces";
import "@fontsource/barlow";
import { ThemeProvider, createGlobalStyle } from "styled-components";

// Define what props.theme will look like
const theme = {
  colors: {
    darkCyan: "#0E8784",
    darkGreyBlue: "#333D4B",
    paleOrange: "#FDD6BA",
    lightCream: "#FEFCF7",
    grey: "#83888F",
  },
  breakpoints: {
    tablet: "768px",
    desktop: "996px",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Barlow', sans-serif;
    max-width: 1280px;
    margin: 0 auto;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Fraunces', serif;
  }
  p {
    line-height: 1.625;
    font-size: 0.9375rem
    @media(min-width: 996px) {
      font-size: 1rem;
    }
  }
`;

/* 
font-family: 'Barlow', sans-serif;
font-family: 'Fraunces', serif;
 */
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
