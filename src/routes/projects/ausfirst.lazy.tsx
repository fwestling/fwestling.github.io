import ToolCard from "@/components/tech-stack/ToolCard/ToolCard";
import { ToolInfo } from "@/data/tools";
import {
	Box,
	Button,
	Flex,
	Heading,
	Link,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { createLazyFileRoute } from "@tanstack/react-router";
import PhotoAlbum from "../../components/projects/ausfirst/PhotoAlbum";

export const Route = createLazyFileRoute("/projects/ausfirst")({
	component: AusFirst,
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
		name: "Node.js",
		type: "Backend",
		link: "https://nodejs.org/",
		logo: "https://avatars.githubusercontent.com/u/9950313?s=280&v=4",
		category: "Dev & Design",
	},
	{
		name: "NestJS",
		type: "Backend",
		link: "https://nestjs.com/",
		logo: "https://nestjs.com/logo-small.ede75a6b.svg",
		category: "Dev & Design",
	},
	{
		name: "Material UI",
		type: "Component Library",
		link: "https://material-ui.com/",
		logo: "https://avatars.githubusercontent.com/u/33663932?s=280&v=4",
		category: "Dev & Design",
	},
	{
		name: "MongoDB",
		type: "Database",
		link: "https://www.mongodb.com/",
		logo: "https://avatars.githubusercontent.com/u/45120?s=280&v=4",
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
		name: "Redux",
		type: "State Management",
		link: "https://redux.js.org/",
		logo: "https://avatars.githubusercontent.com/u/13142323?s=280&v=4",
		category: "Dev & Design",
	},
	{
		name: "Firebase",
		type: "Infrastructure",
		link: "https://firebase.google.com/",
		logo: "https://avatars.githubusercontent.com/u/1335026?s=280&v=4",
		category: "Dev & Design",
	},
	{
		name: "GitHub",
		type: "Version Control",
		link: "https://github.com",
		logo: "https://avatars.githubusercontent.com/u/9919?s=280&v=4",
		category: "Dev & Design",
	},
];

function AusFirst() {
	const baseColor = useColorModeValue("gray.800", "gray.200");

	return (
		<Box maxW={1024}>
			<Heading
				color="brand.text"
				fontFamily="heading"
				py={2}
				flex={0}
				alignSelf={"start"}
			>
				FIRST Australia Registration System
			</Heading>
			<Heading size="md" color="gray.400" fontFamily="heading" py={2} flex={0}>
				A registration system for participants and volunteers in FIRST
				Australia's robotics programs
			</Heading>

			<Flex
				flexDirection={["column", "row"]}
				gap={8}
				justifyContent="center"
				maxW={1024}
			>
				<Flex flexDirection="column" gap={8} flex={2}>
					<Text variant="p" color={baseColor}>
						During my undergrad, I worked as a technical assistant at{" "}
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
						science, technology, engineering, and mathematics (STEM). My job was
						basically to help with whatever needed doing - sometimes I acted as
						a warehouse manager, sometimes a software developer, sometimes just
						as a helping hand.
					</Text>
					<Text variant="p" color={baseColor}>
						While working there, I noticed that the scheduling process for
						events (where each team needed to compete in various events, with
						enough time in between to travel) was a manual, time-consuming
						process that was prone to errors. I decided to take on the challenge
						of automating the scheduling process, and spent years developing
						increasingly advanced software, starting with shell scripts, moving
						on to Java desktop applications and finally moving into web
						frontends, developing a standalone React app which could also be
						installed as an Electron application. The final version could even
						generate all the resources needed for a tournament organiser as PDF
						and PPT files, so all they had to do was enter their tournament
						information, hit "generate" and then print the outputs:
					</Text>
					<a
						href="https://first-australia.github.io/tournament-in-a-box/"
						target="_blank"
						rel="noreferrer"
					>
						<Button aria-label="Link to Tournament in a Box">
							Tournament in a Box
						</Button>
					</a>

					<Text variant="p" color={baseColor}>
						The new scheduler the registration process for participants and
						volunteers was a big help, but I had also noticed the participant
						and volunteer registration system was similarly inefficient, and
						decided to put together a web-based registration system that
						streamlined the process for all involved.
					</Text>
					<Text variant="p" color={baseColor}>
						I built the system over several iterations during 3 years, mostly
						alone in my spare time but recently the team has expanded to include
						FIRST employees. It has a Node backend (originally Express, but
						later NestJS) and a Typescript React frontend, which uses Redux for
						state management and Material UI for a component library.
					</Text>
					<Text variant="p" color={baseColor}>
						The registration system handles thousands of teams and hundeds of
						volunteers every year, and securely processes ~$400k in payments per
						year.
					</Text>
					<Text variant="p" color={baseColor}>
						My plans for the system next include integrating the scheduler into
						the management system, so that tournament directors can handle
						everything in one place; once that's done, I plan to build a
						tournament-day app to allow teams and volunteers to streamline their
						tournament day experience. I'm well qualified to tackle this task as
						I personally volunteer at dozens of these events each year.
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
