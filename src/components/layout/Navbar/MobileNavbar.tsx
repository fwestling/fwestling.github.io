import {
	Box,
	Collapse,
	Flex,
	useBoolean,
	useColorModeValue,
} from "@chakra-ui/react";
import Logo from "../Logo/Logo";
import MenuToggle from "../MenuToggle/MenuToggle";
import NavbarContent from "./NavbarContent";

const MobileNavbar = () => {
	const [isOpen, { toggle }] = useBoolean();
	const navBg = useColorModeValue("whiteAlpha.300", "blackAlpha.300");

	return (
		<Flex
			as="nav"
			justify="space-between"
			position="fixed"
			bottom={0}
			left={0}
			right={0}
			margin={8}
			padding="10px 16px"
			bg={navBg}
			borderRadius="12px"
		>
			<Flex align="center" width="100%" justifyContent="space-between">
				<Logo />
				<MenuToggle toggle={toggle} isOpen={isOpen} />
			</Flex>
			<Collapse in={isOpen}>
				<Box
					alignItems="center"
					justifyContent="flex-start"
					gap={16}
					flexGrow={1}
				>
					<NavbarContent />
				</Box>
			</Collapse>
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

export default MobileNavbar;
