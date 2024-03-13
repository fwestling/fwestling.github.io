import Portrait from "@/components/atomic/Portrait/Portrait";
import {
  Box,
  Heading,
  Link as ChLink,
  Text,
  useColorModeValue,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Link, createLazyFileRoute } from "@tanstack/react-router";
import { IoSend } from "react-icons/io5";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
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
        A little about me
      </Heading>
      <Heading size="md" color="gray.400" fontFamily="heading" py={2} flex={0}>
        Who I am and what I do
      </Heading>

      <Flex
        flexDirection={["column", "row"]}
        gap={8}
        justifyContent="center"
        maxW={1024}
      >
        <Flex flexDirection="column" gap={8} flex={2}>
          <Text variant="p" color={baseColor}>
            Hello! I'm{" "}
            <Box as="span" color={highlightColor}>
              Fred Westling
            </Box>
            , a full-stack developer and roboticist based in the vibrant city of
            Sydney, Australia. With a passion for innovation and creative
            problem-solving, I've dedicated my career to crafting digital
            experiences that make a difference.
          </Text>
          <Text variant="p" color={baseColor}>
            As a developer, my expertise touches every aspect of project
            development - from the initial infrastructure to backend, frontend,
            and mobile client development. I'm proficient in TypeScript, C#,
            Python and more; and have hands-on experience with frameworks
            including React, React Native and ASP.NET, and have built and
            maintained infrastructure on Azure and Heroku, including using
            Infrastructure-as-code to automatically deploy multi-instance
            services. I've had the pleasure of building applications that serve
            thousands of users, processing hundreds of thousands of dollars in
            transactions and managing millions of digital assets.
          </Text>
          <Text variant="p" color={baseColor}>
            One of my strengths is my ability to work within various
            architectural styles - I'm as comfortable with monolithic structures
            as I am with microservice-based architectures. I have a particular
            fondness for startup environments, where the agility and dynamism of
            small teams thrive. I love creating new things and relish
            opportunities to work on greenfield projects or modernize existing
            apps with a fresh technical perspective.
          </Text>
          <Text variant="p" color={baseColor}>
            Before stepping into the world of full-stack development, I trained
            as a roboticist, earning a degree in Mechatronic Engineering. I also
            hold a PhD in Agricultural Robotics, where my work focused on
            developing big data processing algorithms to simulate light
            absorption from laser scans of fruit orchards, with a specific
            interest in avocados.
          </Text>
          <Text variant="p" color={baseColor}>
            Outside of my professional pursuits, I'm committed to giving back to
            the community. I volunteer at a robotics program designed to inspire
            the next generation of STEM enthusiasts. Thank you for visiting my
            page. Feel free to reach out via{" "}
            <ChLink
              color={highlightColor}
              textDecor={"underline"}
              target="_blank"
              rel="noreferrer"
              href="mailto:fredrik.westling@gmail.com"
            >
              email
            </ChLink>
            , check out my{" "}
            <ChLink
              color={highlightColor}
              textDecor={"underline"}
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/16qbXckkZnhuz5DG8vsFeAw1vhCVcQV9m/view?usp=drive_link"
            >
              resume
            </ChLink>{" "}
            or connect with me on{" "}
            <ChLink
              color={highlightColor}
              textDecor={"underline"}
              target="_blank"
              rel="noreferrer"
              href="https://au.linkedin.com/in/fredwestling"
            >
              LinkedIn
            </ChLink>
            . I look forward to the possibility of working with you!
          </Text>
        </Flex>
        <Flex
          flexDir={"column"}
          justifyContent={"start"}
          gap={16}
          alignItems={"center"}
        >
          <Portrait />
          <Link to="/contact">
            <Button leftIcon={<IoSend />}>Get in touch!</Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
