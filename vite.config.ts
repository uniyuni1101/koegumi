/// <reference types="vitest/config" />

import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vite";

const dirname =
	typeof __dirname !== "undefined"
		? __dirname
		: path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
const config = defineConfig({
	resolve: {
		tsconfigPaths: true,
	},
	plugins: [devtools(), tailwindcss(), tanstackStart(), viteReact()],
	test: {
		environment: "happy-dom",
		projects: [
			{
				extends: true,
				test: {
					include: ["src/**/*.test.{js,ts,jsx,tsx}"],
					exclude: [
						"src/**/*.browser.test.{js,ts,jsx,tsx}",
						"**/node_modules/**",
						"**/.git/**",
					],
					environment: "happy-dom",
				},
			},
			{
				extends: true,
				test: {
					name: "browser",
					include: ["src/**/*.browser.test.{js,ts,jsx,tsx}"],
					browser: {
						provider: playwright(),
						enabled: true,
						// at least one instance is required
						instances: [{ browser: "chromium" }],
					},
				},
			},
			{
				extends: true,
				plugins: [
					// The plugin will run tests for the stories defined in your Storybook config
					// See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
					storybookTest({
						configDir: path.join(dirname, ".storybook"),
					}),
				],
				test: {
					name: "storybook",
					browser: {
						enabled: true,
						headless: true,
						provider: playwright({}),
						instances: [
							{
								browser: "chromium",
							},
						],
					},
				},
			},
		],
	},
});
export default config;
