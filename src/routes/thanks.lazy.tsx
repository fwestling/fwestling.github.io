import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/thanks")({
  component: Thanks,
});

function Thanks() {
  return (
    <Box maxW={1024} w="100%">
      <Heading
        color="brand.text"
        fontFamily="heading"
        py={2}
        flex={0}
        alignSelf={"start"}
      >
        Thank you!
      </Heading>
      <Divider mt={4} mb={4} />

      <Box
        display="flex"
        flexDirection="column"
        gap={8}
        justifyContent="center"
        maxW={1024}
      >
        <Text>Thank you for getting in touch! I'll respond when I can.</Text>
        <Text>Have a lovely day! </Text>
      </Box>
    </Box>
  );
}
