import renderer from "react-test-renderer";
import { expect, test } from "vitest";
import ProgressiveImage from "./ProgressiveImage";

import TestWrapper from "@/TestWrapper";

test("renders without errors", () => {
  const component = renderer.create(
    <TestWrapper>
      <ProgressiveImage />
    </TestWrapper>
  );
  expect(component).toBeDefined();
});
