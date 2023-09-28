export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.hook("app:created", () => {
		console.log("hello from plugin");
	});
	return {
		provide: {
			sayHello: (msg) => console.log(`Hello ${msg}!`),
		},
	};
});
