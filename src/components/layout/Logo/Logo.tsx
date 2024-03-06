import { Box, BoxProps, Heading } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";

type Props = BoxProps;

const Logo = (props: Props) => {
	return (
		<Link to={"/"}>
			<Box {...props}>
				<Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
					Fred W
				</Heading>
			</Box>
		</Link>
	);
};

export default Logo;
