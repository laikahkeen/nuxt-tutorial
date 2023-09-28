<template>
	<div class="bg-slate-100 text-black">
		<header>
			<ul>
				<li>
					<NuxtLink to="/">home</NuxtLink>
					<NuxtLink to="/events">events</NuxtLink>
				</li>
			</ul>
		</header>
		<p>Custom layout</p>
		<slot />
	</div>
</template>
