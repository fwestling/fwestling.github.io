import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/projects/builtview")({
  component: About,
});

function About() {
  return (
    <div className="p-2">
      <p>More about BuiltView</p>
      <p>Coming soon!</p>
    </div>
  );
}
