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

const Projects = () => {
  return (
    <Fragment>
      <Heading color="brand.text" fontFamily="heading" py={8} flex={0}>
        Projects
      </Heading>
      <Card maxW={80} align="center" m="auto">
        <CardHeader>
          <Heading size="xl">FIRST Australia registration system</Heading>
        </CardHeader>
        <CardBody>
          <Text fontFamily="body">Cool thing I did</Text>
        </CardBody>
        <CardFooter>
          <Button px={8} py={4} size="xl" variant="solid">
            Welcome
          </Button>
        </CardFooter>
      </Card>
      <Card maxW={80} align="center" m="auto">
        <CardHeader>
          <Heading size="xl">BuiltView</Heading>
        </CardHeader>
        <CardBody>
          <Text fontFamily="body">Cool thing I did</Text>
        </CardBody>
        <CardFooter>
          <Button px={8} py={4} size="xl" variant="solid">
            Welcome
          </Button>
        </CardFooter>
      </Card>

      <Card maxW={80} align="center" m="auto">
        <CardHeader>
          <Heading size="xl">Demetric</Heading>
        </CardHeader>
        <CardBody>
          <Text fontFamily="body">Cool thing I did</Text>
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
export const Route = createLazyFileRoute("/projects")({
  component: Projects,
});
