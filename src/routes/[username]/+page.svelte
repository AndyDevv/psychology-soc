<script lang="ts">
	import type { PageData } from './$types';
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import ReusableGltf from '$components/ReusableGLTF.svelte';

	export let data: PageData;
</script>

<div class="mx-28">
	<h1 class="text-3xl font-bold mb-12">Dashboard</h1>
	<div class="flex flex-col gap-8">
		<section class="bg-secondary w-[300px] p-4 rounded-3xl grid grid-cols-2 grid-rows-2">
			<h1 class="text-2xl font-bold">Details</h1>
			<div class="flex gap-x-5 ml-1 col-start-1">
				<section>
					<h3 class="text-secondary">Blood</h3>
					<span class="font-bold">A+</span>
				</section>
				<section>
					<h3 class="text-secondary">Height</h3>
					<span class="font-bold">180cm</span>
				</section>
				<section>
					<h3 class="text-secondary">Weight</h3>
					<span class="font-bold">70kg</span>
				</section>
			</div>
			<button type="button" class="col-start-3 row-start-1 self-start">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5">
					<path
						fill="#8971e6"
						d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
					/>
				</svg>
			</button>
		</section>
		<section class="bg-secondary w-[600px] p-4 rounded-3xl">
			<h1 class="text-2xl font-bold">Activity</h1>
			<!-- <SC.Canvas antialias width={50} height={50}>
				<SC.PerspectiveCamera position={[-10, 36, 20]} near={0.1} far={500} fov={40} />
				<SC.OrbitControls
					enabled={true}
					enableZoom={true}
					autoRotate={false}
					autoRotateSpeed={2}
					enableDamping={true}
					dampingFactor={0.1}
					target={[-6, 17, 0]}
				/>
				<ReusableGltf modelURL={brainGLTF} name="brain" scale={[0.05, 0.05, 0.05]} />
			</SC.Canvas> -->
		</section>
		<section class="bg-secondary w-[400px] p-4 rounded-3xl">
			<h1 class="text-2xl font-bold">Treatment</h1>
			<div>
				<div class="flex gap-x-2 font-medium">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-6">
						<path
							fill="#8971e6"
							d="M112 96c-26.5 0-48 21.5-48 48V256h96V144c0-26.5-21.5-48-48-48zM0 144C0 82.1 50.1 32 112 32s112 50.1 112 112V368c0 61.9-50.1 112-112 112S0 429.9 0 368V144zM554.9 399.4c-7.1 12.3-23.7 13.1-33.8 3.1L333.5 214.9c-10-10-9.3-26.7 3.1-33.8C360 167.7 387.1 160 416 160c88.4 0 160 71.6 160 160c0 28.9-7.7 56-21.1 79.4zm-59.5 59.5C472 472.3 444.9 480 416 480c-88.4 0-160-71.6-160-160c0-28.9 7.7-56 21.1-79.4c7.1-12.3 23.7-13.1 33.8-3.1L498.5 425.1c10 10 9.3 26.7-3.1 33.8z"
						/>
					</svg>
					<p>Vitamin A</p>
				</div>
			</div>
		</section>
	</div>
</div>
