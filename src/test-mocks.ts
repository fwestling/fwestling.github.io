import type * as ReactRouter from "@tanstack/react-router";
import { vi } from "vitest";

interface SetupReactRouterMocksParams {
	useParams?: () => Record<string, string>;
	useSearch?: () => {
		view: string;
		id: string;
		type: string;
		isSupport: boolean;
	};
}

export const setupReactRouterMocks = ({
	useParams,
	useSearch,
}: SetupReactRouterMocksParams = {}): void => {
	vi.mock(
		"@tanstack/react-router",
		async (importOriginal: () => Promise<typeof ReactRouter>) => {
			const actualRouters = await importOriginal();

			return {
				...actualRouters,
				useNavigate: () => vi.fn(),
				useParams: async () => useParams,
				useSearch: async () => useSearch,
			};
		},
	);
};
