import { ProjectData } from "@/data/projects";
import { Image } from "@chakra-ui/react";

type Props = { project: ProjectData };

const ProjectIcon = ({ project: { icon, title } }: Props) => {
  return (
    <Image
      src={icon}
      alt={`Icon for Project "${title}"`}
      h={70}
      w={70}
      borderRadius={8}
    />
  );
};

export default ProjectIcon;
