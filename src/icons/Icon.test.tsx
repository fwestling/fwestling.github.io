import renderer from "react-test-renderer";
import { expect, test } from "vitest";
import CloseIcon from "./CloseIcon";
import DownIcon from "./DownIcon";
import MenuIcon from "./MenuIcon";

test("Close icon renders without errors", () => {
	const component = renderer.create(<CloseIcon />);
	expect(component).toBeDefined();
});

test("Menu icon renders without errors", () => {
	const component = renderer.create(<MenuIcon />);
	expect(component).toBeDefined();
});

test("Down icon renders without errors", () => {
	const component = renderer.create(<DownIcon />);
	expect(component).toBeDefined();
});
