import { ToolInfo } from "@/data/tools";
import { Image } from "@chakra-ui/react";
import ToolFallback from "@/assets/tools.png";

type Props = { tool: ToolInfo };

const ToolIcon = ({ tool: { logo, name } }: Props) => {
  return (
    <Image
      src={logo}
      fallbackSrc={ToolFallback}
      alt={`Icon for "${name}"`}
      minH={["60px", "114px"]}
      minW={["60px", "114px"]}
      h={["60px", "114px"]}
      w={["60px", "114px"]}
      borderRadius={8}
    />
  );
};

export default ToolIcon;
