import ProgressiveImage from "@/components/atomic/ProgressiveImage/ProgressiveImage";
import { ProjectData } from "@/data/projects";
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { IoArrowForward } from "react-icons/io5";
import ProjectIcon from "../ProjectIcon/ProjectIcon";
import { Link } from "@tanstack/react-router";
import { useAppTheme } from "@/style/theme";

type Props = {
  project: ProjectData;
};

const ProjectCard = ({ project }: Props) => {
  const bg = useColorModeValue("whiteAlpha.600", "blackAlpha.600");
  const theme = useAppTheme();

  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)[0];
  return (
    <Card
      flex={1}
      align="center"
      m="auto"
      backgroundColor={bg}
      title="Project Card"
      borderRadius={"xl"}
    >
      <Box display="flex">
        <CardBody
          flex={3}
          p={["16px", "32px", "48px", "64px"]}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <ProjectIcon project={project} />
          <Heading id="project-title" size="lg">
            {project.title}
          </Heading>
          <Text fontFamily="body" color={"gray.500"}>
            {project.description}
          </Text>
          <Box mt="auto" mr="auto">
            <Link to={project.link}>
              <Button
                size="xl"
                p={2}
                variant="ghost"
                rightIcon={<IoArrowForward />}
              >
                Find out more
              </Button>
            </Link>
          </Box>
        </CardBody>
        {isMobile ? null : (
          <Box flex={2}>
            <ProgressiveImage
              objectFit={"cover"}
              src={project.screenshot}
              alt={project.title}
              height={"100%"}
              width={"100%"}
              borderRadius={"0 12px 12px 0"}
            />
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default ProjectCard;
