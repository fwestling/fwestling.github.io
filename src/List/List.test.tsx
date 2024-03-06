import renderer from "react-test-renderer";
import { expect, test } from "vitest";
import List from "./List";

test("renders without errors", () => {
	const component = renderer.create(<List />);
	expect(component).toBeDefined();
});

test("renders a list of users", () => {
	const component = renderer.create(<List />);
	const instance = component.root;
	const list = instance.findByType("ul");
	expect(list).toBeDefined();
});
