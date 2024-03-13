import { Box, Link as ChakraLink, Flex, Stack, Text } from "@chakra-ui/react";
import { Link, LinkProps } from "@tanstack/react-router";

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

const Footer = () => {
	return (
		<Flex flexDirection={["column-reverse", "row"]}>
			<Stack>
				<Text size={"md"}>Elsewhere</Text>
				{externalLinks.map((link) => (
					<ChakraLink href={link.href} key={link.label}>
						{link.label}
					</ChakraLink>
				))}
			</Stack>
			<Stack>
				<Text size={"md"}>Links</Text>
				{internalLinks.map((link) => (
					<Link to={link.href} key={link.label}>
						{link.label}
					</Link>
				))}
			</Stack>
		</Flex>
	);
};

export default Footer;
