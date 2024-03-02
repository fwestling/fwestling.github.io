import { Link, Text, TextProps } from "@chakra-ui/react";

type Props = {
  children: string;
  isLast?: boolean;
  to?: string;
} & Omit<TextProps, "display">;

const MenuItem = ({ children, isLast = false, to = "/", ...rest }: Props) => {
  return (
    <Link href={to}>
      <Text display="block" fontSize="xl" mr={isLast ? 6 : undefined} {...rest}>
        {children}
      </Text>
    </Link>
  );
};

export default MenuItem;
