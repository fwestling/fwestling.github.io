import { Button as TgButton, ButtonProps } from "tamagui";

type Props = ButtonProps;

const Button = (props: Props) => {
  return <TgButton {...props} />;
};

export default Button;
