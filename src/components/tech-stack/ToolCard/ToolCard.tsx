import { ToolInfo } from "@/data/tools";
import { Badge, Card, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import ToolIcon from "../ToolIcon/ToolIcon";

type Props = {
  tool: ToolInfo;
};

const ToolCard = ({ tool }: Props) => {
  const bg = useColorModeValue("whiteAlpha.600", "blackAlpha.400");
  const shadow = useColorModeValue("#00000088", "#ffffff88");
  const bgHov = useColorModeValue("whiteAlpha.800", "blackAlpha.800");

  return (
    <Card
      as="a"
      href={tool.link}
      target="_blank"
      rel="noopener noreferrer"
      flex={0}
      align="center"
      m="auto"
      variant="elevated"
      backgroundColor={bg}
      borderRadius={"xl"}
      border="1px solid grey.400"
      minWidth={["100%", 270]}
      minHeight={[0, 270]}
      justifyContent={["flex-start", "center"]}
      _hover={{
        boxShadow: `0px 0px 8px 2px ${shadow}`,
        backgroundColor: bgHov,
      }}
      flexDirection={["row", "column"]}
      transition={
        "box-shadow 0.25s ease-in-out 0s, background-color 0.25s ease-in-out 0s"
      }
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
    </Card>
  );
};

export default ToolCard;
