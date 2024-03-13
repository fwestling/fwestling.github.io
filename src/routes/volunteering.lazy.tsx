import PhotoAlbum from "@/components/volunteering/PhotoAlbum/PhotoAlbum";
import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/volunteering")({
  component: Volunteering,
});

function Volunteering() {
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
        Volunteering
      </Heading>
      <Heading size="md" color="gray.400" fontFamily="heading" py={2} flex={0}>
        How I use my spare time to give back
      </Heading>

      <Flex
        flexDirection={["column", "row"]}
        gap={8}
        justifyContent="center"
        maxW={1024}
      >
        <Flex flexDirection="column" gap={8} flex={2}>
          <Text variant="p" color={baseColor}>
            I have always believed in the power of giving back to the community,
            and I have found a truly rewarding way to do so through my volunteer
            work with{" "}
            <Link
              href="https://firstaustralia.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>FIRST</i> Australia
            </Link>
            . <i>FIRST</i> (For Inspiration and Recognition of Science and
            Technology) is an exciting robotics competition aimed at sparking
            the interest of primary and high school students in the fields of
            science, technology, engineering, and mathematics (STEM).
          </Text>
          <Text variant="p" color={baseColor}>
            As a mentor in the FIRST Robotics Competition, I have had the
            privilege of working with multiple teams, guiding them through the
            process, and watching them grow into competent engineers. This
            experience, spanning over a decade, has been incredibly fulfilling,
            and I wouldn't trade the thousands of hours I've dedicated to this
            cause for anything.{" "}
          </Text>
          <Text variant="p" color={baseColor}>
            In addition, I serve as the national head referee for the FIRST LEGO
            League in Australia. This role involves making crucial decisions
            around rules, preparing materials for local head referees, and
            conducting annual training sessions. My responsibilities also extend
            to acting as the head referee for the Australian National
            tournaments and the Asia Pacific Invitational tournament each year.{" "}
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
            My volunteering journey has been an exhilarating ride, filled with
            countless learning opportunities and the joy of contributing to the
            growth of young minds. It's a unique way to spend my time, and I
            cannot recommend it enough!{" "}
          </Text>
          <Text variant="p" color={baseColor}>
            Do you share a similar passion for STEM and education? There's
            always room for more hands on deck, and it's an exhilerating way to
            spend a day --{" "}
            <Box as="span" color={highlightColor}>
              robots playing basketball??
            </Box>{" "}
            Join me at FIRST Australia and let's help inspire the next
            generation of STEM leaders together!
          </Text>
        </Flex>
        <Flex
          flexDir={"column"}
          justifyContent={"start"}
          gap={16}
          flex={2}
          alignItems={"center"}
        >
          <PhotoAlbum />
        </Flex>
      </Flex>
    </Box>
  );
}
