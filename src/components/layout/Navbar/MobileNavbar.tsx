import { Box, Collapse, Flex, useBoolean } from "@chakra-ui/react";
import Logo from "../Logo/Logo";
import MenuToggle from "../MenuToggle/MenuToggle";
import NavbarContent from "./NavbarContent";

const MobileNavbar = () => {
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
			bg="purple.500"
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
					<NavbarContent mobile />
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
