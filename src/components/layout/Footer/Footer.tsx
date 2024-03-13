import {
  Box,
  Link as ChakraLink,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, LinkProps } from "@tanstack/react-router";
import Logo from "../Logo/Logo";

type ExtLink = {
  label: string;
  href: string;
};

type IntLink = {
  label: string;
  href: LinkProps["to"];
};

const externalLinks: ExtLink[] = [
  {
    label: "Email",
    href: "mailto:fredrik.westling@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/fwestling",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fredwestling",
  },
];

const internalLinks: IntLink[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Work",
    href: "/projects",
  },
  {
    label: "Tech Stack",
    href: "/stack",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const flagemojiToPNG = (flag: "AU" | "SE") =>
  `https://flagcdn.com/24x18/${flag.toLocaleLowerCase()}.png`;

const Footer = () => {
  const baseColor = useColorModeValue("gray.600", "gray.400");
  return (
    <Flex
      flexDirection={["column-reverse", "row"]}
      gap={[8, 32]}
      p={[4, 0]}
      maxW={1024}
      m="auto"
      mb={8}
    >
      <Stack>
        <Box mr="auto">
          <Logo />
        </Box>
        <Flex gap={1} alignItems="center">
          <Text color={baseColor} fontSize={"xs"}>
            Thanks for stopping by!
          </Text>
          <Image height={"12px"} src={flagemojiToPNG("AU")} />
          <Image height={"12px"} src={flagemojiToPNG("SE")} />
        </Flex>
        <Text color={baseColor} fontSize={"xs"}>
          Proudly made on Gadigal Land in Sydney Australia
        </Text>
        <Box flex={1} minH={8} />
        <Text color={baseColor} fontSize={"xs"}>
          © 2024 Fredrik Westling.
        </Text>
        <Text color={baseColor} fontSize={"xs"}>
          All Rights Reserved.{" "}
        </Text>
      </Stack>
      <Box flex={1} />
      <Stack>
        <Text size={"md"}>Elsewhere</Text>
        {externalLinks.map((link) => (
          <ChakraLink
            color={baseColor}
            href={link.href}
            key={link.label}
            rel="noreferrer"
            target="_blank"
          >
            {link.label}
          </ChakraLink>
        ))}
      </Stack>
      <Stack>
        <Text size={"md"}>Links</Text>
        {internalLinks.map((link) => (
          <Link to={link.href} key={link.label}>
            <Text color={baseColor}>{link.label}</Text>
          </Link>
        ))}
      </Stack>
    </Flex>
  );
};

export default Footer;
