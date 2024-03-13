import PressableCard from "@/components/atomic/PressableCard/PressableCard";
import { ToolInfo } from "@/data/tools";
import { Badge, Flex, Text } from "@chakra-ui/react";
import ToolIcon from "../ToolIcon/ToolIcon";

type Props = {
  tool: ToolInfo;
};

const ToolCard = ({ tool }: Props) => {
  return (
    <PressableCard
      href={tool.link}
      flex={0}
      align="center"
      m="auto"
      minWidth={["100%", 270]}
      minHeight={[0, 270]}
      justifyContent={["flex-start", "center"]}
      flexDirection={["row", "column"]}
    >
      <Flex flexDir={["row", "column"]} flex={[1, 0]}>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          flex={1}
          margin={2}
          //   minWidth={60}
          //   minHeight={60}
          //   padding={"93px 108px"}
        >
          <ToolIcon tool={tool} />
        </Flex>
        <Flex
          position={["relative", "absolute"]}
          bottom={0}
          left={0}
          right={0}
          justifyContent={"space-between"}
          padding={4}
          width={"100%"}
          flex={[5, 0]}
        >
          <Text marginTop="auto" marginBottom="auto" fontWeight={"600"}>
            {tool.name}
          </Text>
          <Badge
            colorScheme="gray"
            padding={1}
            borderRadius={16}
            marginTop="auto"
            marginBottom="auto"
          >
            {tool.type}
          </Badge>
        </Flex>
      </Flex>
    </PressableCard>
  );
};

export default ToolCard;
