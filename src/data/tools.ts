export const toolCategories = ["Dev & Design"] as const;
export type ToolCategory = (typeof toolCategories)[number];

export type ToolInfo = {
	name: string;
	type: string;
	link: string;
	logo: string;
	category: ToolCategory;
};

export const tools: ToolInfo[] = [
	{
		name: "Chakra UI",
		type: "Component Library",
		link: "https://chakra-ui.com/",
		logo: "https://avatars.githubusercontent.com/u/54212428?s=280&v=4",
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
		name: "Typescript",
		type: "Language",
		link: "https://www.typescriptlang.org/",
		logo: "https://www.typescriptlang.org/icons/icon-256x256.png?v=8944a05a8b601855de116c8a56d3b3ae",
		category: "Dev & Design",
	},
	{
		name: "React",
		type: "Framework",
		link: "https://reactjs.org/",
		logo: "https://avatars.githubusercontent.com/u/6412038?s=280&v=4",
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
		name: "React Native",
		type: "Framework",
		link: "https://reactnative.dev/",
		logo: "https://reactnative.dev/img/header_logo.svg",
		category: "Dev & Design",
	},
];
