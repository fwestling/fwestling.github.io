import { Box, Flex } from "@chakra-ui/react";
import Logo from "../Logo/Logo";
import NavbarContent from "./NavbarContent";

const Navbar = () => {
  return (
    <Flex
      flex={0}
      as="nav"
      border="1px"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      width="100%"
      bg="purple.500"
    >
      <Flex align="center" mr="5" width="auto" justifyContent="flex-start">
        <Logo />
      </Flex>
      <Box
        display="flex"
        width="auto"
        alignItems="center"
        justifyContent="flex-start"
        gap={16}
        mr={16}
        ml={16}
        flexGrow={1}
      >
        <NavbarContent />
      </Box>
      {/* <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button bg="transparent" border="1px">
          Sign In
        </Button>
      </Box> */}
    </Flex>
  );
};

export default Navbar;
