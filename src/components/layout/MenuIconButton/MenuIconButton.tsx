import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { Link, LinkProps } from "@tanstack/react-router";

type Props = IconButtonProps;

const MenuIconButton = (props: Props) => {
	return <IconButton {...props} variant="ghost" flex={1} />;
};

export default MenuIconButton;
