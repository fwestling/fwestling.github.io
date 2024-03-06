import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/stack")({
  component: Stack,
});

function Stack() {
  return <div className="p-2">Hello from Stack!</div>;
}
