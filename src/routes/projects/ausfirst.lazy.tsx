import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/projects/ausfirst")({
  component: About,
});

function About() {
  return (
    <div className="p-2">
      <p>More about the FIRST Australia Registration System</p>
      <p>Coming soon!</p>
    </div>
  );
}
