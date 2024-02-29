import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { TamaguiProvider } from "tamagui";

describe("Button", () => {
  it("renders the button with the provided label", () => {
    const label = "Click me";
    render(
      <TamaguiProvider>
        <Button>{label}</Button>
      </TamaguiProvider>
    );
    const buttonElement = screen.getByText(label);
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls the onClick function when the button is clicked", () => {
    const onClick = jest.fn();
    render(
      <TamaguiProvider>
        <Button onPress={onClick}>Click me</Button>
      </TamaguiProvider>
    );
    const buttonElement = screen.getByText("Click me");
    buttonElement.click();
    expect(onClick).toHaveBeenCalled();
  });
});
