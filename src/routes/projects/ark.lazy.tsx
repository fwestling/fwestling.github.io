import ArkScreenshot from "@/assets/projects/screenshots/ark.png";
import ToolCard from "@/components/tech-stack/ToolCard/ToolCard";
import { ToolInfo } from "@/data/tools";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/projects/ark")({
  component: Ark,
});

const tools: ToolInfo[] = [
  {
    name: "Typescript",
    type: "Language",
    link: "https://www.typescriptlang.org/",
    logo: "https://www.typescriptlang.org/icons/icon-256x256.png?v=8944a05a8b601855de116c8a56d3b3ae",
    category: "Dev & Design",
  },
  {
    name: "React",
    type: "Frontend",
    link: "https://reactjs.org/",
    logo: "https://avatars.githubusercontent.com/u/6412038?s=280&v=4",
    category: "Dev & Design",
  },
  {
    name: "ASP.NET Core",
    type: "Backend",
    link: "https://dotnet.microsoft.com/apps/aspnet",
    logo: "https://avatars.githubusercontent.com/u/9141961?s=280&v=4",
    category: "Dev & Design",
  },
  {
    name: "GraphQL",
    type: "Backend",
    link: "https://graphql.org/",
    logo: "https://avatars.githubusercontent.com/u/12972006?s=200&v=4",
    category: "Dev & Design",
  },
  {
    name: "Ant Design",
    type: "Component Library",
    link: "https://ant.design/",
    logo: "https://avatars.githubusercontent.com/u/12101536?s=200&v=4",
    category: "Dev & Design",
  },
  {
    name: "PostgreSQL",
    type: "Database",
    link: "https://www.postgresql.org/",
    logo: "https://www.postgresql.org/media/img/about/press/elephant.png",
    category: "Dev & Design",
  },
  {
    name: "Figma",
    type: "Design",
    link: "https://www.figma.com/",
    logo: "https://avatars.githubusercontent.com/u/5155369?s=280&v=4",
    category: "Dev & Design",
  },
  {
    name: "Azure",
    type: "Hosting",
    link: "https://azure.microsoft.com",
    logo: "https://avatars.githubusercontent.com/u/6844498?s=280&v=4",
    category: "Dev & Design",
  },
  {
    name: "Bicep",
    type: "Infrastructure",
    link: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview?tabs=bicep",
    logo: "https://github.com/Azure/ALZ-Bicep/wiki/media/bicep-logo.png",
    category: "Dev & Design",
  },
  {
    name: "Apollo GraphQL",
    type: "State Management",
    link: "https://www.apollographql.com/",
    logo: "https://avatars.githubusercontent.com/u/17189275?s=200&v=4",
    category: "Dev & Design",
  },
  {
    name: "Vite",
    type: "Build Tool",
    link: "https://vitejs.dev/",
    logo: "https://vitejs.dev/logo.svg",
    category: "Dev & Design",
  },
  {
    name: "GitHub",
    type: "Version Control",
    link: "https://github.com",
    logo: "https://avatars.githubusercontent.com/u/9919?s=280&v=4",
    category: "Dev & Design",
  },
  {
    name: "Github Actions",
    type: "CI/CD",
    link: "https://github.com/features/actions",
    logo: "https://avatars.githubusercontent.com/u/44036562?s=280&v=44",
    category: "Dev & Design",
  },
  {
    name: "Jira",
    type: "Project Management",
    link: "https://www.atlassian.com/software/jira",
    logo: "https://mp-cdn.elgato.com/media/09a931d3-74f7-4ebd-9454-1a84c55eda9c/233afa36-fbb5-4981-af1c-dcd12b6b07dc/Jira-app-icon-optimized-b3470575-3ddd-4026-aa83-bc0b86873fb6.png",
    category: "Dev & Design",
  },
  {
    name: "Notion",
    type: "Project Management",
    link: "https://www.notion.so/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    category: "Dev & Design",
  },
];

function Ark() {
  const baseColor = useColorModeValue("gray.800", "gray.200");
  const highlightColor = useColorModeValue("purple", "white");

  return (
    <Box maxW={1024}>
      <Heading
        color="brand.text"
        fontFamily="heading"
        py={2}
        flex={0}
        alignSelf={"start"}
      >
        Ark
      </Heading>
      <Heading size="md" color="gray.400" fontFamily="heading" py={2} flex={0}>
        Easy-to-use software for planning and construction
      </Heading>

      <Flex
        flexDirection={["column", "row"]}
        gap={8}
        justifyContent="center"
        maxW={1024}
      >
        <Flex flexDirection="column" gap={8} flex={2}>
          <Text variant="p" color={baseColor}>
            <Box as="span" color={highlightColor}>
              Ark&nbsp;
            </Box>
            is a digital platform designed for the construction industry. It
            allows builders to store and manage kits of parts, and use those
            parts to design new builds in minutes. This allows enormous time
            savings for the bidding and design stages, and can be used to enable
            Modern Methods of Construction (MMC), with the potential to save up
            to
            <Box as="span" color={highlightColor}>
              &nbsp;20% of project cost&nbsp;
            </Box>
            .
          </Text>
          <Text variant="p" color={baseColor}>
            I worked as a lead full-stack developer at Ark, initially focused on
            frontend development, but later took on more responsibility for the
            backend and infrastructure.
          </Text>
          <Heading size="sm">Frontend</Heading>
          <Text variant="p" color={baseColor}>
            Ark's frontend client application is a web app hosted as a
            statically built website, built with Typescript React. I used a
            number of efficiencies to keep development agile, including
            open-source design library Ant Design, and Apollo GraphQL for state
            management and network fetching. The service functions for accessing
            the API were autogenerated based on the GraphQL schema produced in
            the backend to ensure they were called correctly and kept up to
            date.
          </Text>
          <Heading size="sm">Backend</Heading>
          <Text variant="p" color={baseColor}>
            The Ark backend is a microservice-architected .NET C# application
            implemented using GraphQL (HotChocolate), and hosted on Azure.
          </Text>
        </Flex>
        <Flex
          flexDir={"column"}
          justifyContent={"start"}
          gap={16}
          alignItems={"center"}
        >
          <Image
            src={ArkScreenshot}
            w={240}
            h={240}
            borderRadius={8}
            objectFit={"contain"}
          />
        </Flex>
      </Flex>
      <Heading size="sm" my={8}>
        Tech stack:
      </Heading>
      <Flex w="100%" flexWrap={"wrap"}>
        {tools.map((tool) => (
          <Box key={tool.name} m={2}>
            <ToolCard key={tool.name} tool={tool} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
