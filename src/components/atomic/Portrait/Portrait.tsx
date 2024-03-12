import { Box, Image, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import PortraitImage from "@/assets/projects/screenshots/demetric.png";
import { ThemeColours, useAppTheme } from "@/style/theme";

const size = [null, 270, 540];

const Portrait = () => {
  const bg = useColorModeValue(
    ThemeColours.gray["100"],
    ThemeColours.gray["900"]
  );
  const theme = useAppTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)[0];

  return isMobile ? null : (
    <Box position="relative" bg="transparent">
      <Box
        position={"absolute"}
        top={-1}
        left={-1}
        right={-1}
        bottom={-1}
        w={size}
        h={size}
        borderRadius={540}
        background={`radial-gradient(circle, ${bg}00 20%, ${bg}ff 70%)`}
      />
      <Image
        src={PortraitImage}
        w={size.map((s) => (s ?? 8) - 8)}
        h={size.map((s) => (s ?? 8) - 8)}
        borderRadius={size.map((s) => (s ?? 8) - 8)}
        objectFit={"cover"}
      />
    </Box>
  );
};

export default Portrait;
