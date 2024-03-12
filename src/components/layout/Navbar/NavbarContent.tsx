import { useAppTheme } from "@/style/theme";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
import { Fragment } from "react";
import {
  IoBriefcase,
  IoChevronDown,
  IoHome,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
  IoMenu,
  IoMoonOutline,
  IoPerson,
  IoSunnyOutline,
} from "react-icons/io5";
import MenuItem from "../MenuItem/MenuItem";

const NavbarContent = () => {
  const theme = useAppTheme();
  const textColor = useColorModeValue("gray.800", "gray.100");
  const [isMd] = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Fragment>
      <Box display={["block", "none"]}>
        <MenuItem to="/" title="Home" icon={<IoHome />} />
      </Box>
      <MenuItem to="/about" title="About" icon={<IoPerson />} />
      <MenuItem to="/projects" title="Projects" icon={<IoBriefcase />} />
      <MenuItem to="/contact" title="Contact" icon={<IoMail />} />
      <Menu>
        {({ isOpen, onClose }) => (
          <>
            {isMd ? (
              <MenuButton
                isActive={isOpen}
                as={IconButton}
                icon={<IoMenu />}
                variant={"link"}
                color={textColor}
              />
            ) : (
              <MenuButton
                isActive={isOpen}
                as={Button}
                variant={"link"}
                color={textColor}
                rightIcon={<IoChevronDown />}
              >
                More
              </MenuButton>
            )}
            <MenuList
              display="flex"
              flexDirection={"column"}
              justifyContent="flex-start"
              gap={"16px"}
              p={4}
            >
              <Link to="/stack">
                <Button variant="link" color={textColor} onClick={onClose}>
                  Tech stack
                </Button>
              </Link>
              <Link to="/volunteering">
                <Button variant="link" color={textColor} onClick={onClose}>
                  Volunteering
                </Button>
              </Link>
              <Divider />
              <a
                href="https://au.linkedin.com/in/fredwestling"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant={"link"}
                  leftIcon={<IoLogoLinkedin />}
                  aria-label="Link to Fred's LinkedIn profile"
                >
                  LinkedIn
                </Button>
              </a>
              <a
                href="https://github.com/fwestling"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant={"link"}
                  leftIcon={<IoLogoGithub />}
                  aria-label="Link to Fred's GitHub account"
                >
                  Github
                </Button>
              </a>

              <Button
                display={["block", "none"]}
                variant="ghost"
                color={textColor}
                leftIcon={
                  colorMode === "dark" ? <IoMoonOutline /> : <IoSunnyOutline />
                }
                onClick={toggleColorMode}
              >
                Toggle color mode
              </Button>
            </MenuList>
          </>
        )}
      </Menu>
    </Fragment>
  );
};

export default NavbarContent;
