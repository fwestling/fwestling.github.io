import renderer from "react-test-renderer";
import { expect, test } from "vitest";
import ToolCard from "./ToolCard";

import TestWrapper from "@/TestWrapper";
import { tools } from "@/data/tools";

const testTool = tools[0];

test("renders without errors", () => {
  const component = renderer.create(
    <TestWrapper>
      <ToolCard tool={testTool} />
    </TestWrapper>
  );
  expect(component).toBeDefined();
});

test("renders an image", () => {
  const component = renderer.create(
    <TestWrapper>
      <ToolCard tool={testTool} />
    </TestWrapper>
  );

  const imageElement = component.root.findByType("img");
  expect(imageElement).toBeDefined();

  expect(imageElement.props.alt).toContain(testTool.name);
});

test("renders an image with an alt tag containing the tool name", () => {
  const component = renderer.create(
    <TestWrapper>
      <ToolCard tool={testTool} />
    </TestWrapper>
  );

  const imageElement = component.root.findByType("img");
  expect(imageElement).toBeDefined();

  expect(imageElement.props.alt).toContain(testTool.name);
});
