import CloseIcon from "@/icons/CloseIcon";
import MenuIcon from "@/icons/MenuIcon";
import { Box } from "@chakra-ui/react";

type Props = {
  toggle: () => void;
  isOpen: boolean;
};

const MenuToggle = ({ toggle, isOpen }: Props) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

export default MenuToggle;
