// theme.ts

// 1. import `extendTheme` function
import { extendTheme, ThemeConfig, StyleObjectOrFn } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleObjectOrFn) => ({
      body: {
        bg: mode("#fff", "gray.900")(props),
      },
    }),
  },
});

export default theme;
