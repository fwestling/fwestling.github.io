import { IconButton, IconButtonProps } from "@chakra-ui/react";

type Props = IconButtonProps;

const MenuIconButton = (props: Props) => {
  return <IconButton {...props} variant="ghost" flex={1} />;
};

export default MenuIconButton;
