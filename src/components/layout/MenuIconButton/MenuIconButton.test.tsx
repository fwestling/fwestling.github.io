import renderer from "react-test-renderer";
import { expect, test } from "vitest";
import MenuIconButton from "./MenuIconButton";

test("renders without errors", () => {
	const component = renderer.create(
		<MenuIconButton aria-label="test component" />,
	);
	expect(component).toBeDefined();
});
