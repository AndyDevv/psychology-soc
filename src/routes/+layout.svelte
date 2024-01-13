<script lang="ts">
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
			<li><a href="/">Health library</a></li>
		</ul>
	</div>
	<div class="justify-self-end">
		<a href="/login">
			<button type="button" class="bg-accent font-medium py-2 px-6 rounded-full">Login</button>
		</a>
	</div>
</header>

{#each stars as { x, y }, index}
	<div class="star" style={`left: ${x}px; top: ${y}px;`}>
		<svg xmlns="http://www.w3.org/2000/svg" width="18px" height="16px" viewBox="0 0 576 512">
			<path
				fill="#ffffff"
				d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
			/>
		</svg>
	</div>
{/each}

<main>
	<slot />
</main>

<style>
	.glassmorph {
		background: rgba(255, 255, 255, 0.11);
		backdrop-filter: blur(10vmax);
		-webkit-backdrop-filter: blur(10px);
		border-radius: 9999px;
		border: 1px solid rgba(255, 255, 255, 0.18);
	}

	#ray {
		height: 1px;
	}

	#top-ray {
		background-color: #ffffff;
		height: 28vmax;
		aspect-ratio: 1;
		position: absolute;
		top: -25%;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 50%;
		background: linear-gradient(to right, #b2adce, #3c336c);
		animation: rotate 20s infinite;
		opacity: 0.8;
		z-index: -2;
	}

	#ray-blur {
		height: 100%;
		width: 100%;
		position: absolute;
		z-index: -2;
		backdrop-filter: blur(10vmax);
	}

	.star {
		position: absolute;
		animation: glow 1s infinite alternate;
	}

	@keyframes glow {
		from {
			filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
		}
		to {
			filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1));
		}
	}
</style>
