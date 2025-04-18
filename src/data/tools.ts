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
    name: "GraphQL",
    type: "Backend",
    link: "https://graphql.org/",
    logo: "https://avatars.githubusercontent.com/u/12972006?s=200&v=4",
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
    name: "Chakra UI",
    type: "Component Library",
    link: "https://chakra-ui.com/",
    logo: "https://avatars.githubusercontent.com/u/54212428?s=280&v=4",
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
    name: "SQL Server",
    type: "Database",
    link: "https://www.microsoft.com/en-us/sql-server/sql-server-2019",
    logo: "https://symbols.getvecta.com/stencil_28/61_sql-database-generic.90b41636a8.png",
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
    name: "Redux",
    type: "State Management",
    link: "https://redux.js.org/",
    logo: "https://avatars.githubusercontent.com/u/13142323?s=280&v=4",
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
    name: "Expo",
    type: "Mobile",
    link: "https://expo.dev/",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREaLFgEZqFG8zVa2SLkOAa5ZR7OzZjgToozE39Xx9bFw&s",
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
