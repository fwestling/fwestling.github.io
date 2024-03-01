import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: '"Montserrat", sans-serif',
    body: '"Open Sans", sans-serif',
  },
  colors: {
    brand: {
      bg: "#9747FF",
      text: "#fff",
      card: "#0A99FF",
    },
  },
});

export default theme;
