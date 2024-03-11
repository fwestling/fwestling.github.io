import ProjectCard from "@/components/projects/ProjectCard/ProjectCard";
import projects from "@/data/projects";
import { Box, Heading } from "@chakra-ui/react";
import { createLazyFileRoute } from "@tanstack/react-router";

const Projects = () => {
  return (
    <Box maxW={1024}>
      <Heading
        color="brand.text"
        fontFamily="heading"
        py={2}
        flex={0}
        alignSelf={"start"}
      >
        Projects
      </Heading>
      <Heading size="md" color="gray.400" fontFamily="heading" py={2} flex={0}>
        Project and ideas I've worked on
      </Heading>

      <Box
        display="flex"
        flexDirection="column"
        gap={8}
        justifyContent="center"
        maxW={1024}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Box>
    </Box>
  );
};
export const Route = createLazyFileRoute("/projects/")({
  component: Projects,
});
