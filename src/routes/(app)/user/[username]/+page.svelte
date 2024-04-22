<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import Logo from '$components/logo.svelte';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import ReusableGltf from '$components/ReusableGLTF.svelte';
	import { writable } from 'svelte/store';
	import { enhance } from '$app/forms';

	export let data: PageData;
</script>

<div class="flex items-center gap-x-4">
	<section class="bg-secondary w-[600px] p-4 rounded-3xl [&_canvas]:!static [&_.container]:!static">
		<h1 class="text-2xl font-bold">Activity</h1>
		<SC.Canvas antialias width={1920} height={1080} background={new THREE.Color('rgb(57, 55, 96)')}>
			<!-- <SC.Canvas antialias width={500} height={500} background={new THREE.Color('rgb(0, 0, 0)')}> -->
			<SC.PerspectiveCamera position={[0, -8, 25]} near={0.1} far={100} fov={40} />

			<SC.OrbitControls
				enabled={true}
				enableZoom={true}
				autoRotate={false}
				autoRotateSpeed={2}
				enableDamping={true}
				dampingFactor={0.1}
				target={[0, -10, 0]}
			/>

			<SC.DirectionalLight
				color={new THREE.Color(0xffffff)}
				position={[0, 10, 10]}
				intensity={0.75}
				shadow={false}
			/>
			<SC.AmbientLight color={new THREE.Color(0xffffff)} intensity={0.75} />

			<ReusableGltf modelURL={'/brain.gltf'} name="brain" scale={[1, 1, 1]} />
		</SC.Canvas>
	</section>
	<section class="bg-secondary w-[400px] p-4 rounded-3xl overflow-hidden self-start">
		<h1 class="text-2xl font-bold">Treatment</h1>
		<div class="flex flex-col gap-y-2 mt-2">
			{#each $page.data.treatment as treatment}
				<div class="flex gap-x-2 font-medium">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-6">
						<path
							fill="#8971e6"
							d="M112 96c-26.5 0-48 21.5-48 48V256h96V144c0-26.5-21.5-48-48-48zM0 144C0 82.1 50.1 32 112 32s112 50.1 112 112V368c0 61.9-50.1 112-112 112S0 429.9 0 368V144zM554.9 399.4c-7.1 12.3-23.7 13.1-33.8 3.1L333.5 214.9c-10-10-9.3-26.7 3.1-33.8C360 167.7 387.1 160 416 160c88.4 0 160 71.6 160 160c0 28.9-7.7 56-21.1 79.4zm-59.5 59.5C472 472.3 444.9 480 416 480c-88.4 0-160-71.6-160-160c0-28.9 7.7-56 21.1-79.4c7.1-12.3 23.7-13.1 33.8-3.1L498.5 425.1c10 10 9.3 26.7-3.1 33.8z"
						/>
					</svg>
					<p>{treatment.name}</p>
				</div>
			{/each}
		</div>
		<div>
			<form class="flex justify-center" method="POST" use:enhance>
				<input
					type="text"
					name="pill"
					required
					placeholder="Pill name"
					spellcheck="false"
					class="bg-transparent outline-none p-1 py-2 border-b-2"
				/>
				<button type="submit" class="bg-icon px-4">+</button>
			</form>
		</div>
	</section>
	<!-- {JSON.stringify($page.data.treatment)} -->
</div>
