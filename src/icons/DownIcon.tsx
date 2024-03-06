import { Icon, IconProps } from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";

type Props = IconProps;

const DownIcon = (props: Props) => {
  return <Icon as={IoChevronDown} {...props} />;
};

export default DownIcon;
