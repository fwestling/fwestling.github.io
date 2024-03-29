import {
  Theme,
  ThemeOverride,
  extendTheme,
  useTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

import "@fontsource/montserrat";
import "@fontsource/inter";

export const ThemeColours = {
  // brand: {
  // 	bg: "#9747FF",
  // 	text: "#fff",
  // 	card: "#0A99FF",
  // },

  // brand: {
  // 	"50": "#F0F2FF",
  // 	"100": "#D3D8FF",
  // 	"200": "#B6BCFF",
  // 	"300": "#99A1FF",
  // 	"400": "#7C85FF",
  // 	"500": "#5F6AFF",
  // 	"600": "#4D5499",
  // 	"700": "#3B3E66",
  // 	"800": "#292833",
  // 	"900": "#171200",
  // },

  gray: {
    "50": "#F1F2F3",
    "100": "#D8DCDE",
    "200": "#BFC5CA",
    "300": "#A6AFB5",
    "400": "#8D98A0",
    "500": "#74828B",
    "600": "#5D686F",
    "700": "#464E53",
    "800": "#2E3438",
    "900": "#171A1C",
  },
  red: {
    "50": "#FAEBEC",
    "100": "#F0C6C9",
    "200": "#E7A2A6",
    "300": "#DE7D83",
    "400": "#D45961",
    "500": "#CB343E",
    "600": "#A22A31",
    "700": "#7A1F25",
    "800": "#511519",
    "900": "#290A0C",
  },
  orange: {
    "50": "#FFF4E6",
    "100": "#FFE0B8",
    "200": "#FECC8A",
    "300": "#FEB85D",
    "400": "#FEA42F",
    "500": "#FE9001",
    "600": "#CB7301",
    "700": "#985601",
    "800": "#653901",
    "900": "#331D00",
  },
  yellow: {
    "50": "#FDFFE5",
    "100": "#F9FFB8",
    "200": "#F5FF8A",
    "300": "#F2FF5C",
    "400": "#EEFF2E",
    "500": "#EAFF00",
    "600": "#BBCC00",
    "700": "#8D9900",
    "800": "#5E6600",
    "900": "#2F3300",
  },
  green: {
    "50": "#ECF9EE",
    "100": "#C9EDCE",
    "200": "#A7E2AF",
    "300": "#85D690",
    "400": "#62CB71",
    "500": "#40BF52",
    "600": "#339941",
    "700": "#267331",
    "800": "#194D21",
    "900": "#0D2610",
  },
  teal: {
    "50": "#EBFAF9",
    "100": "#C6F1ED",
    "200": "#A1E7E2",
    "300": "#7DDED6",
    "400": "#58D5CA",
    "500": "#34CBBF",
    "600": "#29A399",
    "700": "#1F7A73",
    "800": "#15514C",
    "900": "#0A2926",
  },
  cyan: {
    "50": "#E5FEFF",
    "100": "#B8FBFF",
    "200": "#8AF9FF",
    "300": "#5CF6FF",
    "400": "#2EF4FF",
    "500": "#00F1FF",
    "600": "#00C1CC",
    "700": "#009199",
    "800": "#006166",
    "900": "#003033",
  },
  blue: {
    "50": "#EBEFFA",
    "100": "#C7D3F0",
    "200": "#A2B6E6",
    "300": "#7E9ADD",
    "400": "#5A7DD3",
    "500": "#3661C9",
    "600": "#2B4DA1",
    "700": "#203A79",
    "800": "#162750",
    "900": "#0B1328",
  },
  purple: {
    "50": "#EFECF8",
    "100": "#D4CAED",
    "200": "#B8A8E1",
    "300": "#9C86D5",
    "400": "#8064C9",
    "500": "#6442BD",
    "600": "#503597",
    "700": "#3C2871",
    "800": "#281A4C",
    "900": "#140D26",
  },
  pink: {
    "50": "#F9ECF5",
    "100": "#EEC9E2",
    "200": "#E3A6CF",
    "300": "#D883BC",
    "400": "#CD60AA",
    "500": "#C23D97",
    "600": "#9B3179",
    "700": "#75245A",
    "800": "#4E183C",
    "900": "#270C1E",
  },
};

const theme = extendTheme(withDefaultColorScheme({ colorScheme: "purple" }), {
  fonts: {
    heading: '"Montserrat", sans-serif',
    body: '"Inter", sans-serif',
  },
  colors: ThemeColours,
} satisfies ThemeOverride);

export const useAppTheme = useTheme<Theme>;

export default theme;
