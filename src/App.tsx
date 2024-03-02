import {
  Box,
  Heading,
  Flex,
  Button,
  Card,
  CardBody,
  CardFooter,
  Text,
  CardHeader,
} from "@chakra-ui/react";
import Header from "./components/layout/Header/Header";

const App = () => {
  return (
    <Box
      display="flex"
      width="100vw"
      height="100vh"
      flexDirection="column"
      position="relative"
      flex={1}
    >
      <Header />

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
