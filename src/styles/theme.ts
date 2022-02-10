import { extendTheme, Theme } from "@chakra-ui/react";

export const theme: Partial<Theme> = extendTheme({
  colors: {
    gray: {
      900: "#181823",
      800: "#1F2029",
      700: "#353646",
      600: "#4B4D63",
      500: "#616480",
      400: "#797D9A",
      300: "#969980",
      200: "#B3B5C6",
      100: "#D1D2D0",
      50: "#EEEEF2",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.50",
      },
    },
  },
});