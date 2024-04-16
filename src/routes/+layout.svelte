<script lang="ts">
	import type { LayoutData } from './$types';
	import { onMount } from 'svelte';
	import { inRange } from '$lib';
	import Star from '$components/star.svelte';
	import '../app.css';

	type Star = {
		x: number;
		y: number;
	};

	const stars: Star[] = [
		{ x: 891, y: 171 },
		{ x: 183, y: 244 },
		{ x: 1485, y: 230 },
		{ x: 1739, y: 467 },
		{ x: 1660, y: 740 },
		{ x: 573, y: 737 }
	];

	// TODO: Resize stars on window resize with scale Factor

	export let data: LayoutData;

	$: console.log(data);
</script>

<div id="ray">
	<div id="top-ray"></div>
	<div id="ray-blur"></div>
</div>

<header class="m-4 mx-5 p-4 px-5 grid grid-cols-3 justify-items-center items-center">
	<div class="justify-self-start">
		<h1 class="text-3xl font-bold">
			<a href="/">
				Health<span class="text-accent text-xs mx-0.5">&#9724;</span>On
			</a>
		</h1>
	</div>
	<div class="p-4 glassmorph">
		<ul class="flex items-center justify-center gap-x-10 font-medium">
			<li><a href="/services">Services</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/health-library">Health library</a></li>
		</ul>
	</div>
	{#if data.user}
		<span>
			<a href={`/${data.user.username}`} class="flex items-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-10 h-10">
					<path
						fill="#FFFFFF"
						d="M96 128V70.2c0-13.3 8.3-25.3 20.8-30l96-36c7.2-2.7 15.2-2.7 22.5 0l96 36c12.5 4.7 20.8 16.6 20.8 30V128h-.3c.2 2.6 .3 5.3 .3 8v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V136c0-2.7 .1-5.4 .3-8H96zm48 48c0 44.2 35.8 80 80 80s80-35.8 80-80V160H144v16zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6zM208 48V64H192c-4.4 0-8 3.6-8 8V88c0 4.4 3.6 8 8 8h16v16c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V96h16c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8H240V48c0-4.4-3.6-8-8-8H216c-4.4 0-8 3.6-8 8z"
					/>
				</svg>
				<span class="ml-2 font-bold">{data.user.username}</span>
			</a>
			<!-- <div class="justify-self-end">
				<a href="/login">
					<button type="button" class="bg-accent font-medium py-2 px-6 rounded-full"
						>Sign out</button
					>
				</a>
			</div> -->
		</span>
	{:else}
		<div class="justify-self-end">
			<a href="/login">
				<button type="button" class="bg-accent font-medium py-2 px-6 rounded-full">Login</button>
			</a>
		</div>
	{/if}
</header>
<!-- 0 -->

<main>
	<slot />
</main>

<style>
</style>
