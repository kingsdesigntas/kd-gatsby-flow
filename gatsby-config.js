module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "kd-gatsby-flow",
	},
	plugins: [
		"gatsby-plugin-preact",
		"gatsby-plugin-root-import",
		{
			resolve: `gatsby-plugin-postcss`, // Implements PostCSS
			options: {
				postCssPlugins: [
					require("postcss-import")(), // Add support for sass-like '@import'
					require("postcss-extend")(), // Add support for sass-like '@extend'
					require("postcss-nesting")(), // Add support for sass-like nesting of rules
					require("cssnano")(), // Minify CSS
					require("postcss-preset-env")({
						stage: 3,
					}),
				],
			},
		},
		"gatsby-plugin-gatsby-cloud",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		// {
		// 	resolve: "gatsby-plugin-google-tagmanager",
		// 	options: {
		// 		id: "GTM-TBFRWMK",
		// 	},
		// },
		"gatsby-transformer-remark",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
	],
};
