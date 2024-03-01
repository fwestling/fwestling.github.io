import React from "react";
import {
  Box,
  Heading,
  Flex,
  Button,
  Link,
  Card,
  CardBody,
  CardFooter,
  Text,
  CardHeader,
} from "@chakra-ui/react";

const App = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Box
      display="flex"
      width="100vw"
      height="100vh"
      flexDirection="column"
      position="relative"
      flex={1}
    >
      <Flex
        flex={0}
        as="nav"
        border="1px"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        width="100%"
        bg="#7F5AD5"
        color="white"
      >
        <Flex
          align="center"
          mr={{ md: "5" }}
          width={{ base: "100%", md: "auto" }}
          justifyContent={{ base: "space-between", md: "flex-start" }}
        >
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Chakra UI
          </Heading>

          <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
            <svg
              fill="white"
              width="12px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </Box>
        </Flex>

        <Box
          display={{ base: show ? "block" : "none", md: "flex" }}
          width={{ base: "100%", md: "auto" }}
          alignItems="center"
          justifyContent="center"
          flexGrow={1}
        >
          <Link fontSize="xl" display="block" mr={6}>
            Home
          </Link>
          <Link fontSize="xl" display="block" mr={6}>
            Projects
          </Link>
          <Link fontSize="xl" display="block">
            About Us
          </Link>
        </Box>

        <Box
          display={{ base: show ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
          <Button bg="transparent" border="1px">
            Sign In
          </Button>
        </Box>
      </Flex>
      <Flex
        bg="brand.bg"
        pb={8}
        flex={1}
        flexDirection="column"
        justifyContent="flex-start"
        alignItems={"center"}
      >
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
            <Button
              bg="brand.bg"
              color="brand.text"
              px={8}
              py={4}
              size="xl"
              variant="with-shadow"
            >
              Welcome
            </Button>
          </CardFooter>
        </Card>
      </Flex>
    </Box>
  );
};

export default App;
