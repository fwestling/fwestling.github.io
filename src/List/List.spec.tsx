import { render, screen } from "@testing-library/react";
import List from "./List";

describe("List", () => {
  test("renders heading", async () => {
    render(<List />);
    expect(screen.getByRole("heading", { name: "Items" })).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    render(<List />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(2);
  });
});
