import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/projects/demetric")({
  component: About,
});

function About() {
  return (
    <div className="p-2">
      <p>More about Demetric</p>
      <p>Coming soon!</p>
    </div>
  );
}
