<template>
	<div class="bg-slate-900 text-white">
		<header>
			<ul>
				<li>
					<NuxtLink to="/">home</NuxtLink>
					<NuxtLink to="/events">events</NuxtLink>
				</li>
			</ul>
		</header>
		<p>Default layout</p>
		<slot />
	</div>
</template>
