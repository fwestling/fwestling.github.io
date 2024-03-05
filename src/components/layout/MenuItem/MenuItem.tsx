import { Text, TextProps } from "@chakra-ui/react";
import { Link, LinkProps } from "@tanstack/react-router";

type Props = {
  children: string;
  isLast?: boolean;
  to?: LinkProps["to"];
} & Omit<TextProps, "display">;

const MenuItem = ({ children, isLast = false, to = "/", ...rest }: Props) => {
  return (
    <Link to={to}>
      <Text display="block" fontSize="xl" mr={isLast ? 6 : undefined} {...rest}>
        {children}
      </Text>
    </Link>
  );
};

export default MenuItem;
