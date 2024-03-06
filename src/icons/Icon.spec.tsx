import { render } from "@testing-library/react";
import CloseIcon from "./CloseIcon";
import MenuIcon from "./MenuIcon";
import DownIcon from "./DownIcon";

describe("Icon tests", () => {
  it("renders CloseIcon without error", () => {
    render(<CloseIcon />);
    // Add your assertions here
  });

  it("renders MenuIcon without error", () => {
    render(<MenuIcon />);
    // Add your assertions here
  });

  it("renders MenuIcon without error", () => {
    render(<DownIcon />);
    // Add your assertions here
  });
});
