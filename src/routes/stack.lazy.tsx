import ToolCard from "@/components/tech-stack/ToolCard/ToolCard";
import { tools } from "@/data/tools";
import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/stack")({
  component: Stack,
});

function Stack() {
  return (
    <Box maxW={1024}>
      <Heading
        color="brand.text"
        fontFamily="heading"
        py={2}
        flex={0}
        alignSelf={"start"}
      >
        Tech Stack
      </Heading>
      <Heading size="md" color="gray.400" fontFamily="heading" py={2} flex={0}>
        The dev tools and apps I use
      </Heading>
      <Divider my={8} />
      <Box display="flex" flexWrap={"wrap"} gap={8} justifyContent="center">
        {tools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </Box>
    </Box>
  );
}
