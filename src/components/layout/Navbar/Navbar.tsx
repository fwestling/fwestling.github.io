import {
  Box,
  Divider,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "../Logo/Logo";
import NavbarContent from "./NavbarContent";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMoonOutline,
  IoSunnyOutline,
} from "react-icons/io5";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navBg = useColorModeValue("whiteAlpha.800", "blackAlpha.800");
  const navBgSm = useColorModeValue("whiteAlpha.400", "blackAlpha.400");
  const dividerColor = useColorModeValue("blackAlpha.400", "whiteAlpha.400");

  return (
    <Flex
      flex={0}
      as="nav"
      align="center"
      justify="space-between"
      padding="10px 16px"
      m="32px 32px"
      position={["fixed", "relative"]}
      bottom={[0, "auto"]}
      top={["auto", 0]}
      left={0}
      right={0}
      borderRadius="12px"
      // width="100%"
      zIndex="sticky"
      bg={[navBg, navBgSm]}
    >
      <Box
        display={["none", "flex"]}
        mr="5"
        width="auto"
        justifyContent="flex-start"
      >
        <Logo />
      </Box>
      <Box
        display="flex"
        width="auto"
        alignItems="center"
        justifyContent={["space-evenly", "flex-start"]}
        gap={[0, "20px", "40px"]}
        flexGrow={1}
      >
        <NavbarContent />
      </Box>
      <Box display={["none", "flex"]} gap="8px">
        <a
          href="https://au.linkedin.com/in/fredwestling"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            variant={"ghost"}
            icon={<IoLogoLinkedin size={24} />}
            aria-label="Link to Fred's LinkedIn profile"
          />
        </a>
        <a href="https://github.com/fwestling" target="_blank" rel="noreferrer">
          <IconButton
            variant={"ghost"}
            icon={<IoLogoGithub size={24} />}
            aria-label="Link to Fred's GitHub account"
          />
        </a>
        <Divider
          h="32px"
          m="auto"
          borderColor={dividerColor}
          orientation="vertical"
        />
        <IconButton
          variant={"ghost"}
          onClick={toggleColorMode}
          icon={
            colorMode === "dark" ? (
              <IoMoonOutline size={24} />
            ) : (
              <IoSunnyOutline size={24} />
            )
          }
          aria-label="Toggle color mode"
        />
      </Box>
    </Flex>
  );
};

export default Navbar;
