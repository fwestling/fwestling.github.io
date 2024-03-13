import { Box, BoxProps, useColorMode } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
import LogoLight from "@/assets/avorocket-light.svg?react";
import LogoDark from "@/assets/avorocket-dark.svg?react";

type Props = BoxProps & { option?: "light" | "dark" };

const Logo = ({ option, ...props }: Props) => {
  const colorMode = useColorMode();

  const LogoComponent =
    (option === undefined ? colorMode : option) === "light"
      ? LogoDark
      : LogoLight;

  return (
    <Link to={"/"}>
      <Box {...props}>
        <LogoComponent
          height={48}
          width="auto"
          title="Go to home page"
          aria-label="Personal logo for Fred Westling"
        />
      </Box>
    </Link>
  );
};

export default Logo;
