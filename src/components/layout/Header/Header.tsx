import { Box, Flex, useBoolean } from "@chakra-ui/react";
import MenuItem from "../MenuItem/MenuItem";
import Logo from "../Logo/Logo";
import MenuToggle from "../MenuToggle/MenuToggle";

const Header = () => {
  const [isOpen, { toggle }] = useBoolean();

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
      bg="#7F5AD5"
      color="white"
    >
      <Flex
        align="center"
        mr={{ md: "5" }}
        width={{ base: "100%", md: "auto" }}
        justifyContent={{ base: "space-between", md: "flex-start" }}
      >
        <Logo />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
      </Flex>
      <Box
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "100%", md: "auto" }}
        alignItems="center"
        justifyContent="flex-start"
        gap={16}
        mr={{ base: 0, md: 16 }}
        ml={{ base: 0, md: 16 }}
        flexGrow={1}
      >
        <MenuItem>Home</MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuItem isLast>About Us</MenuItem>
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

export default Header;
