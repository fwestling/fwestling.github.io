import Swedebro from "@/assets/swedebro.png";
import TechStack from "@/assets/techstack.png";
import Portrait from "@/components/atomic/Portrait/Portrait";
import PressableCard from "@/components/atomic/PressableCard/PressableCard";
import ProjectCard from "@/components/projects/ProjectCard/ProjectCard";
import projects from "@/data/projects";
import {
  Box,
  Button,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, createLazyFileRoute } from "@tanstack/react-router";
import { IoDocumentText, IoSend } from "react-icons/io5";

export const Route = createLazyFileRoute("/")({
  component: Home,
});

function Home() {
  const baseColor = useColorModeValue("gray.600", "gray.400");
  const highlightColor = useColorModeValue("purple", "white");

  const cardBg = useColorModeValue("whiteAlpha.600", "blackAlpha.600");

  return (
    <Flex
      maxW={1024}
      gap={16}
      flexDir={"column"}
      width="100%"
      position="relative"
    >
      <Box position="absolute" top={0} right={0}>
        <Portrait />
      </Box>
      <Flex
        width="100%"
        direction="column"
        gap={2}
        alignItems="start"
        justifyContent={"flex-start"}
        position="relative"
        zIndex={2}
      >
        <Flex width="100%">
          <Heading
            color={baseColor}
            fontFamily="heading"
            size="2xl"
            py={2}
            flex={0}
            alignSelf={"start"}
          >
            I'm&nbsp;{" "}
          </Heading>
          <Heading
            color={highlightColor}
            fontFamily="heading"
            size="2xl"
            py={2}
            flex={1}
            alignSelf={"start"}
          >
            Fred Westling
          </Heading>
        </Flex>
        <Heading
          size="md"
          color="gray.400"
          fontFamily="heading"
          py={2}
          flex={0}
        >
          PhD, BE(Mechatronic) BS(Comp. Sci.)
        </Heading>
        <Text variant="p" flex={1} maxW={["100%", "50%"]} color={baseColor}>
          A fullstack engineer, software architect and roboticist with a passion
          for startups and tech prototypes. I specialize in designing and
          building modern mobile and web-based apps with robust, scalable
          infrastructure.
        </Text>
        <Flex mt={8} gap={8} flexWrap={"wrap"}>
          <Button
            as="a"
            href={
              "https://drive.google.com/file/d/16qbXckkZnhuz5DG8vsFeAw1vhCVcQV9m/view?usp=drive_link"
            }
            target="_blank"
            rel="noreferrer"
            variant="outline"
            leftIcon={<IoDocumentText />}
          >
            See my resume
          </Button>
          <Link to="/contact">
            <Button variant="outline" colorScheme="blue" leftIcon={<IoSend />}>
              Get in touch
            </Button>
          </Link>
        </Flex>
      </Flex>

      <Heading
        color="brand.text"
        fontFamily="heading"
        py={2}
        flex={0}
        alignSelf={"start"}
      >
        Selected projects
      </Heading>
      <Box
        display="flex"
        flexDirection="column"
        gap={8}
        justifyContent="center"
        maxW={1024}
      >
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Box>

      <Flex
        flexDirection={["column", "column", "row"]}
        gap={[4, 8, 16]}
        mt={16}
      >
        <PressableCard
          to="/about"
          flex={1}
          align="center"
          backgroundColor={cardBg}
          title="Project Card"
          borderRadius={"xl"}
        >
          <CardHeader w="100%">
            <Heading size="lg">About me</Heading>
            <Text fontFamily="body" color={"gray.500"}>
              Who I am and what I do
            </Text>
          </CardHeader>
          <CardBody>
            <Box
              h={240}
              w={240}
              borderRadius={120}
              bg="gray.300"
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image src={Swedebro} h={200} w={200} objectFit={"cover"} />
            </Box>
          </CardBody>
        </PressableCard>
        <PressableCard
          to="/stack"
          flex={1}
          align="center"
          backgroundColor={cardBg}
          title="Project Card"
          borderRadius={"xl"}
        >
          <CardHeader w="100%">
            <Heading size="lg">Tech stack</Heading>
            <Text fontFamily="body" color={"gray.500"}>
              The dev tools and apps I use
            </Text>
            <CardBody>
              <Image src={TechStack} />
            </CardBody>
          </CardHeader>
        </PressableCard>
      </Flex>

      <Flex
        mt={16}
        flexDir={["column", "row"]}
        justifyContent={"space-between"}
        backgroundColor={cardBg}
        p={4}
        borderRadius="xl"
      >
        <Flex flexDir={"column"} gap={4}>
          <Heading size="lg" color={highlightColor}>
            Let's work together!
          </Heading>
          <Text variant="p" color={baseColor}>
            Want to discuss an opportunity to create something great? I'm ready
            when you are
          </Text>
        </Flex>
        <Box>
          <Link to="/contact">
            <Button leftIcon={<IoSend />}>Get in touch</Button>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
}
