import { Link, createLazyFileRoute } from "@tanstack/react-router";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Fragment } from "react/jsx-runtime";
import Portrait from "@/components/atomic/Portrait/Portrait";

const Home = () => {
  return (
    <Fragment>
      <Flex direction="column" gap={16} alignItems="start" position="relative">
        <Box position="absolute" top={0} right={0}>
          <Portrait />
        </Box>
        <Heading
          color="brand.text"
          fontFamily="heading"
          py={2}
          flex={0}
          alignSelf={"start"}
        >
          I'm Fred Westling
        </Heading>
        <Heading
          size="md"
          color="gray.400"
          fontFamily="heading"
          py={2}
          flex={0}
        >
          PhD
        </Heading>
        <Flex>
          <Button>See my resume</Button>
          <Link to="/contact">
            <Button>Get in touch</Button>
          </Link>
        </Flex>
      </Flex>
      <Card maxW={80} align="center" m="auto">
        <CardHeader>
          <Heading size="xl"> Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
          <Text fontFamily="body">
            View a summary of all your customers over the last month.
          </Text>
        </CardBody>
        <CardFooter>
          <Button px={8} py={4} size="xl" variant="solid">
            Welcome
          </Button>
        </CardFooter>
      </Card>
    </Fragment>
  );
};
export const Route = createLazyFileRoute("/")({
  component: Home,
});
