import { Card, CardProps, useColorModeValue } from "@chakra-ui/react";
import { Link, LinkProps } from "@tanstack/react-router";

type PressableExtLinkCardProps = CardProps & {
  href: string;
};
type PressableIntLinkCardProps = CardProps & {
  to: LinkProps["to"];
};
type PressableButtonCardProps = CardProps & {
  onClick: () => void;
};

type Props =
  | PressableExtLinkCardProps
  | PressableButtonCardProps
  | PressableIntLinkCardProps;

const isExtLink = (props: Props): props is PressableExtLinkCardProps => {
  return "href" in props;
};
const isIntLink = (props: Props): props is PressableIntLinkCardProps => {
  return "to" in props;
};

const PressableCard = (props: Props) => {
  const bg = useColorModeValue("whiteAlpha.600", "blackAlpha.400");
  const shadow = useColorModeValue("#00000088", "#ffffff88");
  const bgHov = useColorModeValue("whiteAlpha.800", "blackAlpha.800");

  return isExtLink(props) ? (
    <Card
      as="a"
      target="_blank"
      rel="noopener noreferrer"
      variant="elevated"
      backgroundColor={bg}
      borderRadius={"xl"}
      border="1px solid grey.400"
      _hover={{
        boxShadow: `0px 0px 8px 2px ${shadow}`,
        backgroundColor: bgHov,
      }}
      transition={
        "box-shadow 0.25s ease-in-out 0s, background-color 0.25s ease-in-out 0s"
      }
      {...props}
    />
  ) : isIntLink(props) ? (
    <Card
      as={Link}
      href={props.to}
      variant="elevated"
      backgroundColor={bg}
      borderRadius={"xl"}
      border="1px solid grey.400"
      _hover={{
        boxShadow: `0px 0px 8px 2px ${shadow}`,
        backgroundColor: bgHov,
      }}
      transition={
        "box-shadow 0.25s ease-in-out 0s, background-color 0.25s ease-in-out 0s"
      }
      {...props}
    />
  ) : (
    <Card
      variant="elevated"
      backgroundColor={bg}
      borderRadius={"xl"}
      border="1px solid grey.400"
      _hover={{
        boxShadow: `0px 0px 8px 2px ${shadow}`,
        backgroundColor: bgHov,
      }}
      transition={
        "box-shadow 0.25s ease-in-out 0s, background-color 0.25s ease-in-out 0s"
      }
      {...props}
    />
  );
};

export default PressableCard;
