import { Icon, IconProps } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";

type Props = IconProps;

const CloseIcon = (props: Props) => {
  return <Icon as={IoClose} {...props} />;
};

export default CloseIcon;
