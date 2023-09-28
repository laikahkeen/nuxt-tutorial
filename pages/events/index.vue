<template>
	<div>events</div>
</template>

<script setup>
definePageMeta({
	layout: "custom",
	middleware: "auth",
});

const { sayHello } = useUtils();
sayHello();

const { $sayHello } = useNuxtApp();
console.log(useNuxtApp());
$sayHello("haha");
</script>
