import { createLazyFileRoute } from "@tanstack/react-router";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Fragment } from "react/jsx-runtime";

const Home = () => {
  return (
    <Fragment>
      <Heading color="brand.text" fontFamily="heading" py={8} flex={0}>
        Welcome
      </Heading>
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
