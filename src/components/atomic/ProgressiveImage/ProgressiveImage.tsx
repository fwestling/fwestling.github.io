import {
  Box,
  Image,
  ImageProps,
  styled,
  useColorModeValue,
} from "@chakra-ui/react";
import { useCallback, useMemo, useState } from "react";
import { Blurhash } from "react-blurhash";

const DefaultBlurhashLight = "LFRC}N%f~WIVsDozovV@EgIT-V%N";
const DefaultBlurhashDark = "L25},I4n4T~q^+IoI-%25l_3VY01";

type Props = ImageProps & {
  placeholder?: string;
};

const ProgressiveImage = ({ placeholder, ...rest }: Props) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const defaultBlurhash = useColorModeValue(
    DefaultBlurhashLight,
    DefaultBlurhashDark
  );
  const imgPlaceholder = useMemo(
    () => placeholder ?? defaultBlurhash,
    [placeholder, defaultBlurhash]
  );

  const onLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Based on implementation from https://medium.com/@dev.family/improving-user-experience-efficient-image-loading-using-progressive-display-32ac92dbca35
  // Theirs only loads the image when the component is visible, but I don't need that.  If I ever do -- go to that link.

  return (
    <Box sx={{ ...rest }}>
      <BlurContainer display={isLoaded ? "none" : "block"}>
        <Blurhash
          hash={imgPlaceholder}
          width={"100%"}
          height={"100%"}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </BlurContainer>
      <Image {...rest} onLoad={onLoad} />
    </Box>
  );
};

export default ProgressiveImage;

const BlurContainer = styled(Box, {
  baseStyle: {
    // position: "absolute",
    // width: "100%",
    // height: "100%",
    // zIndex: 222222,
    // transition: "visibility 0.2s, opacity 0.2s",
  },
  variants: {
    isHidden: {
      true: {
        display: "none",
      },
    },
  },
});
