import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { IoLogoGithub, IoLogoLinkedin, IoMail, IoSend } from "react-icons/io5";

export const Route = createLazyFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const bg = useColorModeValue("whiteAlpha.600", "blackAlpha.600");
  return (
    <Box maxW={1024} w="100%">
      <Heading
        color="brand.text"
        fontFamily="heading"
        py={2}
        flex={0}
        alignSelf={"start"}
      >
        Get in touch
      </Heading>
      <Heading size="md" color="gray.400" fontFamily="heading" py={2} flex={0}>
        Let's build something awesome
      </Heading>
      <Divider mt={4} mb={4} />

      <Box
        display="flex"
        flexDirection="column"
        gap={8}
        justifyContent="center"
        maxW={1024}
      >
        <Box
          as="form"
          action="https://public.herotofu.com/v1/38cc2040-e0dd-11ee-8997-33db515e56e2"
          method="post"
          accept-charset="UTF-8"
          display="flex"
          flexDir={"column"}
          gap={8}
          bgColor={bg}
          padding={8}
          borderRadius={8}
        >
          <FormControl isRequired display="flex" alignItems="center">
            <FormLabel>Email:</FormLabel>
            <Input
              name="Email"
              placeholder="Enter your email address"
              id="email"
              type="email"
              required
            />
          </FormControl>
          <FormControl isRequired display="flex" alignItems="center">
            <FormLabel>Name:</FormLabel>
            <Input
              name="Name"
              id="name"
              placeholder="Enter your name"
              type="text"
              required
            />
          </FormControl>
          <FormControl isRequired display="flex" alignItems="center">
            <FormLabel>Subject:</FormLabel>
            <Input
              name="Subject"
              id="subject"
              placeholder="Enter subject"
              type="text"
              required
            />
          </FormControl>
          <FormControl isRequired display="flex" alignItems="center">
            <Textarea
              name="Message"
              id="message"
              placeholder="Write your message here"
              required
            />
          </FormControl>
          <Flex justifyContent={"end"}>
            <Box
              textIndent={"-99999px"}
              whiteSpace={"nowrap"}
              overflow={"hidden"}
              position={"absolute"}
              aria-hidden={true}
            >
              <Input
                border="none"
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
              />
            </Box>

            <Button leftIcon={<IoSend />} type="submit">
              Send
            </Button>
          </Flex>
        </Box>

        <Flex w="100%" justifyContent={"center"} gap={8}>
          <a
            href="mailto:fredrik.westling@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton
              variant={"ghost"}
              icon={<IoMail size={24} />}
              aria-label="Link to email Fred directly"
            />
          </a>
          <a
            href="https://au.linkedin.com/in/fredwestling"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton
              variant={"ghost"}
              icon={<IoLogoLinkedin size={24} />}
              aria-label="Link to Fred's LinkedIn profile"
            />
          </a>
          <a
            href="https://github.com/fwestling"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton
              variant={"ghost"}
              icon={<IoLogoGithub size={24} />}
              aria-label="Link to Fred's GitHub account"
            />
          </a>
        </Flex>
      </Box>
    </Box>
  );
}
