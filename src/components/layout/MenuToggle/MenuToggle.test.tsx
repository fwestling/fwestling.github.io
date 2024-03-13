import renderer from "react-test-renderer";
import { expect, test } from "vitest";
import MenuToggle from "./MenuToggle";

test("renders without errors", () => {
	const component = renderer.create(
		<MenuToggle isOpen={false} toggle={() => {}} />,
	);
	expect(component).toBeDefined();
});
