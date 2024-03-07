import { Box, Flex, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import MobileNavbar from "@/components/layout/Navbar/MobileNavbar";
import Navbar from "@/components/layout/Navbar/Navbar";
import { useAppTheme } from "@/style/theme";
import { Outlet } from "@tanstack/react-router";
import React, { Fragment, Suspense } from "react";
import "App.css";

const XTanStackRouterDevtools =
	import.meta.env.NODE_ENV === "production"
		? () => null // Render nothing in production
		: React.lazy(() =>
				// Lazy load in development
				import("@tanstack/router-devtools").then((res) => ({
					default: res.TanStackRouterDevtools,
					// For Embedded Mode
					// default: res.TanStackRouterDevtoolsPanel
				})),
		  );

const Root = () => {
	const background = useColorModeValue("gray.100", "gray.900");
	return (
		<Box width="100vw" minHeight="100vh" bg={background} position="relative">
			<Box className="background backgroundGradientTop" />
			<Box className="background backgroundGradientBottom" />
			<Box display="flex" flexDirection="column" position="relative" flex={1}>
				<Navbar />

				<Flex
					p={4}
					flex={1}
					flexDirection="column"
					justifyContent="flex-start"
					alignItems={"center"}
					height="100vh"
				>
					<Outlet />
				</Flex>
				<Suspense>
					<XTanStackRouterDevtools />
				</Suspense>
			</Box>
		</Box>
	);
};

export default Root;
