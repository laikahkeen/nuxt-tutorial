export default defineNuxtRouteMiddleware((to, from) => {
	const isLoggedIn = false;
	if (isLoggedIn) {
		return navigateTo(to.fullPath);
	} else {
		console.log("not logged in!");
	}
});
