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
});

export default theme;
