let productCount = 0;

export default defineEventHandler(async () => {
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve(productCount++);
		}, 500);
	});
	return {
		productCount,
	};
});
