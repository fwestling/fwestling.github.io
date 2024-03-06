import { Fragment } from "react";
import MenuItem from "../MenuItem/MenuItem";
import {
	Button,
	Collapse,
	Menu,
	MenuButton,
	MenuList,
	useBoolean,
} from "@chakra-ui/react";
import DownIcon from "@/icons/DownIcon";

type Props = {
	mobile?: boolean;
};
const NavbarContent = ({ mobile = false }: Props) => {
	const [isCollapsed, { toggle }] = useBoolean();

	return (
		<Fragment>
			<MenuItem to="/about">About</MenuItem>
			<MenuItem to="/projects">Projects</MenuItem>
			<MenuItem to="/contact">Contact</MenuItem>
			{!mobile ? (
				<Menu>
					{({ isOpen, onClose }) => (
						<>
							<MenuButton
								isActive={isOpen}
								as={Button}
								rightIcon={<DownIcon />}
							>
								More
							</MenuButton>
							<MenuList>
								<MenuItem onClick={onClose} to="/stack">
									Tech stack
								</MenuItem>
								<MenuItem onClick={onClose} to="/volunteering">
									Volunteering
								</MenuItem>
							</MenuList>
						</>
					)}
				</Menu>
			) : (
				<Fragment>
					<Button onClick={toggle} bg="transparent" border="1px">
						More
					</Button>
					<Collapse in={!isCollapsed} animateOpacity>
						<MenuItem to="/stack">Tech stack</MenuItem>
						<MenuItem to="/volunteering">Volunteering</MenuItem>
					</Collapse>
				</Fragment>
			)}
		</Fragment>
	);
};

export default NavbarContent;
