<template>
	<!-- <div>index page</div>
	<IconsBell />
	<Alert />
	<div>
		<ContentDoc />
	</div>
	<div>
		Counter: {{ counter }} Counter: {{ store.count }}
		<button @click="store.increment">+</button>
		<button @click="counter++">+</button>
		<button @click="counter--">-</button>
	</div>
	<div>
		<p>Current color : {{ color }}</p>
	</div>
	<Counter />
	<div>
		<p v-if="pending">Loading</p>
		<p v-else="pending">{{ data }}</p>
	</div> -->
	<div>
		<p>{{ productCount }}</p>
		<button @click="refresh">Refresh</button>
	</div>
</template>

<script setup>
useHead({
	title: "Nuxt tutorial",
	description: "this is a tutorial testing",
	meta: [
		{
			name: "description",
			content: "haha",
		},
	],
});
// const counter = useCounter();
// const color = useColor();
// import { useCounterStore } from "~/stores/myStore";
// const store = useCounterStore();
// // const response = await $fetch("/api/hello");
// // console.log(response);

// // console.log(store);

// const { data, pending } = await useLazyFetch("/api/products");
// console.log(data.value);
const { data: productCount } = await useAsyncData("test", () =>
	$fetch("/api/test")
);

const refresh = () => {
	refreshNuxtData("test");
};
</script>
