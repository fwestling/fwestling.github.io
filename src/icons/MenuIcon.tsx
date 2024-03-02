import { Icon, IconProps } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";

type Props = IconProps;

const MenuIcon = (props: Props) => {
  return <Icon as={IoMenu} {...props} />;
};

export default MenuIcon;
