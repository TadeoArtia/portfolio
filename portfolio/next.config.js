/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

/** @type {import("next").NextConfig} */
const config = {
	redirects: async () => [
		{
			source: "/",
			destination: "/landing",
			permanent: true,
		},
	],
};

export default config;
