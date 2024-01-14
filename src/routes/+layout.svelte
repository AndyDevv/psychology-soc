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
<!-- 0 -->

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
		top: -10%;
		left: 50%;
		transform: translate(-50%, 10%);
		border-radius: 50%;
		background: linear-gradient(to right, #b2adce, #3c336c);
		animation: rotate 20s infinite;
		opacity: 0.8;
		z-index: -2;
	}

	@media (min-width: 768px) {
		#top-ray {
			top: -60%;
			left: 50%;
			transform: translate(-50%, 60%);
		}
	}

	#ray-blur {
		height: 100%;
		width: 100%;
		position: absolute;
		z-index: -2;
		backdrop-filter: blur(10vmax);
		/* backdrop-filter: blur(clamp(10vmax, 2.5vw, 50vmax)); */
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
