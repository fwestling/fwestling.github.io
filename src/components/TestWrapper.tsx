import theme from "@/style/theme";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

type Props = {
	children: React.ReactNode;
};

const TestWrapper = ({ children }: Props) => {
	return (
		<ChakraProvider theme={theme}>
			{/* <RouterProvider>{ */}
			{children}
			{/* }</RouterProvider> */}
		</ChakraProvider>
	);
};

export default TestWrapper;
