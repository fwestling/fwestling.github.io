import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import MobileNavbar from "@/components/layout/Navbar/MobileNavbar";
import Navbar from "@/components/layout/Navbar/Navbar";
import { useAppTheme } from "@/style/theme";
import { Outlet } from "@tanstack/react-router";
import React, { Suspense } from "react";

const XTanStackRouterDevtools =
  import.meta.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

const Root = () => {
  const theme = useAppTheme();
  const [isMobile] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  console.log(isMobile);
  return (
    <Box
      display="flex"
      width="100vw"
      height="100vh"
      flexDirection="column"
      position="relative"
      flex={1}
    >
      {isMobile ? <MobileNavbar /> : <Navbar />}

      <Flex
        bg="brand.bg"
        pb={8}
        flex={1}
        flexDirection="column"
        justifyContent="flex-start"
        alignItems={"center"}
      >
        <Outlet />
      </Flex>
      <Suspense>
        <XTanStackRouterDevtools />
      </Suspense>
    </Box>
  );
};

export default Root;
