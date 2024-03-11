import projects from "@/data/projects";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";
import ProjectIcon from "./ProjectIcon";

import TestWrapper from "@/TestWrapper";

const testProject = projects[0];

test("renders without errors", () => {
  const component = renderer.create(
    <TestWrapper>
      <ProjectIcon project={testProject} />
    </TestWrapper>
  );
  expect(component).toBeDefined();
});

test("renders an image", () => {
  const component = renderer.create(
    <TestWrapper>
      <ProjectIcon project={testProject} />
    </TestWrapper>
  );

  const imageElement = component.root.findByType("img");
  expect(imageElement).toBeDefined();

  expect(imageElement.props.alt).toContain(testProject.title);
});

test("renders an image with an alt tag containing the project title", () => {
  const component = renderer.create(
    <TestWrapper>
      <ProjectIcon project={testProject} />
    </TestWrapper>
  );

  const imageElement = component.root.findByType("img");
  expect(imageElement).toBeDefined();

  expect(imageElement.props.alt).toContain(testProject.title);
});
