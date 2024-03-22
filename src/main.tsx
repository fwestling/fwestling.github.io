import { RouterProvider, createRouter } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// These are safe to store in code, as per Firebase's security settings.
const firebaseConfig = {
	apiKey: "AIzaSyAU7AVIVGQVfT_lX5cteSWvjHaUh3Lp0hs",
	authDomain: "westling-website.firebaseapp.com",
	projectId: "westling-website",
	storageBucket: "westling-website.appspot.com",
	messagingSenderId: "1064264798875",
	appId: "1:1064264798875:web:1be857b60a538b62dc6c3e",
	measurementId: "G-KVRVV2Q9KB",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./style/theme";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

// Render the app
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("No root element found");
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<ChakraProvider theme={theme}>
				<RouterProvider router={router} />
			</ChakraProvider>
		</React.StrictMode>,
	);
}
