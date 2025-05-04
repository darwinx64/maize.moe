import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"

import expressiveCode from "astro-expressive-code"
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers"

export default defineConfig({
    site: "https://maize.moe/",
    integrations: [sitemap(), expressiveCode({
		themes: ["rose-pine"],
		plugins: [pluginLineNumbers()],
		styleOverrides: {
			uiFontFamily: "\"Maple Mono\", monospace, sans-serif",
			codeFontFamily: "\"Maple Mono\", monospace, sans-serif",
			codeBackground: "#292929",
			borderColor: "#353535",
			gutterBorderColor: "transparent",
			gutterForeground: "#757575",
			codeLineHeight: "2",
			frames: {
				tooltipSuccessBackground: "#161616"
			}
		}
	}), mdx()],
    prefetch: true
})
