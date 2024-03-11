import { LinkProps } from "@tanstack/react-router";

import BuiltViewScreenshot from "@/assets/projects/screenshots/builtview.png";
import BuiltViewIcon from "@/assets/projects/icons/builtview.png";
import DemetricScreenshot from "@/assets/projects/screenshots/demetric.png";
import DemetricIcon from "@/assets/projects/icons/demetric.png";
import AusFirstScreenshot from "@/assets/projects/screenshots/ausfirst.png";
import AusFirstIcon from "@/assets/projects/icons/ausfirst.png";

export type ProjectData = {
	icon: string;
	screenshot: string;
	title: string;
	description: string;
	link: LinkProps["to"];
};

const projects: ProjectData[] = [
	{
		icon: BuiltViewIcon,
		screenshot: BuiltViewScreenshot,
		title: "BuiltView",
		description:
			"A dedicated camera app and photo gallery for construction teams.",
		link: "/projects/builtview",
	},
	{
		icon: AusFirstIcon,
		screenshot: AusFirstScreenshot,
		title: "FIRST Australia registration system",
		description:
			"A registration system for participants and volunteers in FIRST Australia's robotics programs.",
		link: "/projects/ausfirst",
	},
	{
		icon: DemetricIcon,
		screenshot: DemetricScreenshot,
		title: "Demetric",
		description:
			"A CLI for calculating agronomic insights from mobile LiDAR scans.",
		link: "/projects/demetric",
	},
];

export default projects;
