import "./index.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import App from "./components/App/App";
import React from "react";
import ReactDOM from "react-dom/client";

const themeConfig = {
  fonts: {
    body: "Vazirmatn, system-ui, sans-serif",
    heading: "Vazirmatn, serif",
    mono: "Vazirmatn, monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.7,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
  },
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
  },
};

const theme = extendTheme(themeConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
