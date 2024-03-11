import { useAppTheme } from "@/style/theme";
import {
  Button,
  ButtonProps,
  IconButtonProps,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link, LinkProps, useMatchRoute } from "@tanstack/react-router";
import MenuIconButton from "../MenuIconButton/MenuIconButton";

type Props = {
  isLast?: boolean;
  to?: LinkProps["to"];
  icon: IconButtonProps["icon"];
  title: string;
} & Omit<ButtonProps, "children" | "display">;

const MenuItem = ({
  title,
  icon,
  isLast = false,
  to = "/",
  ...rest
}: Props) => {
  const textColor = useColorModeValue("gray.800", "gray.100");
  const theme = useAppTheme();
  const [renderAsIcon] = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  const routeMatch = useMatchRoute();
  const isActive = routeMatch({ to, fuzzy: true });
  console.log("IsActive", isActive, "to", to);
  return (
    <Link to={to}>
      {renderAsIcon ? (
        <MenuIconButton
          icon={icon}
          aria-label={`Link to ${title}`}
          variant={isActive === false ? "ghost" : undefined}
          {...rest}
        />
      ) : (
        <Button
          variant="link"
          color={rest.color ?? textColor}
          mr={isLast ? 6 : undefined}
          {...rest}
        >
          {title}
        </Button>
      )}
    </Link>
  );
};

export default MenuItem;
