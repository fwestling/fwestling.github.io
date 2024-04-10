import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/projects/niarc")({
	component: About,
});

function About() {
	return (
		<div className="p-2">
			<p>More about Niarc</p>
			<p>Coming soon!</p>
		</div>
	);
}
