// theme.ts

// 1. import `extendTheme` function
import { extendTheme, StyleObjectOrFn, ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  xxl: "1536px",
});

// 3. extend the theme
const theme = extendTheme({
  config,
  breakpoints,
  styles: {
    global: (props: StyleObjectOrFn) => ({
      body: {
        bg: mode("#fff", "gray.900")(props),
      },
    }),
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  colors: {
    secondary: {
      100: "#FFFFFF",
      200: "#F1F1F4",
      300: "#DADBE1",
      400: "#C4C4CF",
      500: "#ADAEBD",
      600: "#8E8FA4",
      700: "#6F718A",
      800: "#56586B",
      900: "#3D3E4C",
    },
    subtitle: {
      100: "#D5D5D5",
      200: "#C0C0C0",
      300: "#ACACAC",
      400: "#979797",
      500: "#838383",
      600: "#676767",
      700: "#4B4B4B",
      800: "#2F2F2F",
      900: "#131313",
    },
    clay: {
      100: "#626B8E",
      200: "#515975",
      300: "#40475D",
      400: "#303445",
      500: "#1F222D",
      600: "#08090C",
      700: "#000000",
      800: "#000000",
      900: "#000000",
    },
  },
});

export default theme;
