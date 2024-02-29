import { TamaguiProvider, createTamagui } from "@tamagui/core";
import { config } from "@tamagui/config/v3";

const tamaguiConfig = createTamagui(config);

// Make Typescript type everything based on the config
type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
	interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig;
