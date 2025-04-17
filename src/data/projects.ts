import { LinkProps } from "@tanstack/react-router";

import AusFirstIcon from "@/assets/projects/icons/ausfirst.png";
import ArkIcon from "@/assets/projects/icons/ark.png";
import BuiltViewIcon from "@/assets/projects/icons/builtview.png";
import DemetricIcon from "@/assets/projects/icons/demetric.png";
import NiarcIcon from "@/assets/projects/icons/niarcpng.png";
import AusFirstScreenshot from "@/assets/projects/screenshots/ausfirst.png";
import ArkScreenshot from "@/assets/projects/screenshots/ark.png";
import BuiltViewScreenshot from "@/assets/projects/screenshots/builtview.png";
import DemetricScreenshot from "@/assets/projects/screenshots/demetric.png";
import NiarcScreenshot from "@/assets/projects/screenshots/niarc.jpg";

export type ProjectData = {
  icon: string;
  screenshot: string;
  title: string;
  description: string;
  link: LinkProps["to"];
};

const projects: ProjectData[] = [
  {
    icon: ArkIcon,
    screenshot: ArkScreenshot,
    title: "Ark",
    description: "Easy-to-use software for planning and construction",
    link: "/projects/ark",
  },
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
  {
    icon: NiarcIcon,
    screenshot: NiarcScreenshot,
    title: "NIARC",
    description:
      "An autonomous robot I built with a team at university which ended up winning the 2014 National Instruments Autonomous Robotics Competition.",
    link: "/projects/niarc",
  },
];

export default projects;
