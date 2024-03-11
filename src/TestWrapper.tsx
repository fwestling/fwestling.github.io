import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const TestWrapper = ({ children }: Props) => {
  //   const rootRoute = createRootRoute({
  //     component: () => children,
  //   });

  //   const router = createRouter({ routeTree: rootRoute });

  return <ChakraProvider>{children}</ChakraProvider>;
};

export default TestWrapper;
