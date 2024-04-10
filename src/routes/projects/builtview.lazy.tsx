import BuiltViewMapping from "@/assets/projects/screenshots/builtview-mapping.gif";
import BuiltViewMicro from "@/assets/projects/screenshots/builtview-microservices.png";
import BuiltViewScreenshot from "@/assets/projects/screenshots/builtview.png";
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

export const Route = createLazyFileRoute("/projects/builtview")({
	component: BuiltView,
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
		name: "React Native",
		type: "Mobile",
		link: "https://reactnative.dev/",
		logo: "https://reactnative.dev/img/header_logo.svg",
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
		name: "Node.js",
		type: "Backend",
		link: "https://nodejs.org/",
		logo: "https://avatars.githubusercontent.com/u/9950313?s=280&v=4",
		category: "Dev & Design",
	},
	{
		name: "Fastify",
		type: "Backend",
		link: "https://www.fastify.io/",
		logo: "https://avatars.githubusercontent.com/u/24939410?s=48&v=4",
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
		name: "SQL Server",
		type: "Database",
		link: "https://www.microsoft.com/en-us/sql-server/sql-server-2019",
		logo: "https://symbols.getvecta.com/stencil_28/61_sql-database-generic.90b41636a8.png",
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
		name: "Tanstack Query",
		type: "State Management",
		link: "https://tanstack.com/",
		logo: "https://avatars.githubusercontent.com/u/72518640?s=200&v=4",
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
		name: "Expo",
		type: "Mobile",
		link: "https://expo.dev/",
		logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREaLFgEZqFG8zVa2SLkOAa5ZR7OzZjgToozE39Xx9bFw&s",
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
		name: "Pivotal Tracker",
		type: "Project Management",
		link: "https://www.pivotaltracker.com/",
		logo: "https://static-00.iconduck.com/assets.00/pivotal-tracker-icon-512x512-citopp97.png",
		category: "Dev & Design",
	},
	{
		name: "Monday.com",
		type: "Project Management",
		link: "https://monday.com/",
		logo: "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-04-24/351412048224_9f4cd62b61d0706e9a96_512.png",
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

function BuiltView() {
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
				BuiltView
			</Heading>
			<Heading size="md" color="gray.400" fontFamily="heading" py={2} flex={0}>
				The dedicated camera app for construction teams
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
							BuiltView&nbsp;
						</Box>
						is a camera app and photo management platform designed for the
						construction industry. It allows construction teams to take photos
						which are automatically tagged, organised and shared, reducing the
						amount of admin work by
						<Box as="span" color={highlightColor}>
							&nbsp;4 hours per week!&nbsp;
						</Box>
					</Text>
					<Text variant="p" color={baseColor}>
						I built the initial prototype of BuiltView as the frontend developer
						in a multidisciplinary innovation team, then went on to develop it
						further, picking up the backend, infrastructure and mobile elements.
					</Text>
					<Heading size="sm">Frontend</Heading>
					<Text variant="p" color={baseColor}>
						BuiltView has two frontend client applications: a web app, hosted as
						a static website, and a mobile app available on iOS and Android.
						Both clients were built with Typescript React (React Native for the
						mobile), and I used a number of efficiencies to keep development
						agile. Multiple open-source libraries were used including Material
						UI for UI components and Tanstack Query for state management and
						network fetching. The service functions for accessing the API were
						autogenerated based on the Swaggerdoc produced in the backend to
						ensure they were called correctly and kept up to date.
					</Text>
					<Heading size="sm">Backend</Heading>
					<Text variant="p" color={baseColor}>
						The BuiltView backend started as a monolithic ASP.NET Core
						application written in C#, though as the project grew, I split it
						into a microservices architecture to enable better scalability and
						make it more future-proof. The backend is hosted on Azure and uses a
						number of Azure services including Azure Functions, Azure Blob
						Storage, and Azure SQL. The backend is responsible for managing the
						photo database, user authentication, and the API for the frontend
						clients.
					</Text>
					<Heading size="sm">Experiments</Heading>
					<Text variant="p" color={baseColor}>
						I'm originally a roboticist, so I couldn't resist the opportunity to
						experiment with a number of more complex methodologies in the
						project. This included AI tagging of photos for better searching,
						photogrammetry to calculate volume of excavations, and 3d printing
						custom cases for external camera to which the mobile app connected.
						The most interesting though was automated mapping of the route taken
						when recording a video using a 360 camera - this algorithm generated
						a walking path in 3d space which could be used to navigate the
						video, as well as a low-density point cloud of colourised landmarks.
					</Text>
				</Flex>
				<Flex
					flexDir={"column"}
					justifyContent={"start"}
					gap={16}
					alignItems={"center"}
				>
					<Image
						src={BuiltViewScreenshot}
						w={240}
						h={240}
						borderRadius={8}
						objectFit={"contain"}
					/>
					<Image
						src={BuiltViewMicro}
						w={240}
						h={240}
						borderRadius={8}
						objectFit={"contain"}
					/>
					<Image
						src={BuiltViewMapping}
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
