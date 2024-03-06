import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/volunteering")({
  component: Volunteering,
});

function Volunteering() {
  return <div className="p-2">Hello from Volunteering!</div>;
}
