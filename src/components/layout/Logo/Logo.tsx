import { Box, BoxProps, Heading } from "@chakra-ui/react";

type Props = BoxProps;

const Logo = (props: Props) => {
  return (
    <Box {...props}>
      <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
        Fred W
      </Heading>
    </Box>
  );
};

export default Logo;
