// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	// app: {
	// 	head: {
	// 		title: "Nuxt tutorial",
	// 		description: "this is a tutorial testing",
	// 		meta: [
	// 			{
	// 				name: "description",
	// 				content: "haha",
	// 			},
	// 		],
	// 	},
	// },
	modules: ["@nuxt/content", "@pinia/nuxt"],
	css: ["~/assets/css/main.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	// ssr: false,
	hooks: {
		ready: (ctx) => {
			console.log(ctx);
		},
	},
});
