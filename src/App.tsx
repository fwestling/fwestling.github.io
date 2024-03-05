import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import MobileNavbar from "./components/layout/Navbar/MobileNavbar";
import Navbar from "./components/layout/Navbar/Navbar";
import Home from "./pages/Home";
import { useAppTheme } from "./style/theme";

const App = () => {
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
        <Home />
      </Flex>
    </Box>
  );
};

export default App;
