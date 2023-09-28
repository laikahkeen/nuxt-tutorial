import data from "./products.json";

export default defineEventHandler(() => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(data);
		}, 2000);
	});
});
