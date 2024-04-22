<script lang="ts">
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';
	import Logo from '$components/logo.svelte';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import ReusableGltf from '$components/ReusableGLTF.svelte';
	import { writable } from 'svelte/store';

	export let data: LayoutData;
</script>

<div class="grid grid-cols-[150px_1fr] h-screen">
	<section class="flex flex-col items-center py-8">
		<a href="/">
			<div class={`relative bg-icon p-4 rounded-2xl w-16 h-16`}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32" height="32">
					<path
						fill="#FFFFFF"
						d="M0 224.2C0 100.6 100.2 0 224 0h24c95.2 0 181.2 69.3 197.3 160.2c2.3 13 6.8 25.7 15.1 36l42 52.6c6.2 7.8 9.6 17.4 9.6 27.4c0 24.2-19.6 43.8-43.8 43.8H448v64c0 35.3-28.7 64-64 64H320v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V407.3c0-16.7-6.9-32.5-17.1-45.8C16.6 322.4 0 274.1 0 224.2zM285.3 208H336c26.5 0 48-21.5 48-48s-21.5-48-48-48c-.9 0-1.8 0-2.7 .1C326.7 93.4 308.9 80 288 80c-8.6 0-16.6 2.2-23.5 6.2C255.9 72.8 241 64 224 64s-31.9 8.8-40.5 22.2c-7-3.9-15-6.2-23.5-6.2c-26.5 0-48 21.5-48 48c-26.5 0-48 21.5-48 48c0 20.9 13.4 38.7 32.1 45.3c0 .9-.1 1.8-.1 2.7c0 26.5 21.5 48 48 48c5.6 0 11-1 16-2.7V288c0 17.7 14.3 32 32 32s32-14.3 32-32V269.3c5 1.8 10.4 2.7 16 2.7c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16zM160 176v2.7l-.1 0c0-.9 .1-1.8 .1-2.7z"
					/>
				</svg>
			</div>
		</a>
		<div class="mt-24 w-full">
			<div class="grid gap-y-12 justify-center relative">
				<a href={`/user/${$page.data.user.username}`}>
					<span class="border-l-4 absolute left-0 w-1 h-8 border-transparent"></span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-7 h-7">
						<path
							fill="#8870e6"
							d="M80 80v96h96V80H80zM32 80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V80zM80 336v96h96V336H80zm-48 0c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V336zM432 80H336v96h96V80zM336 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm0 304v96h96V336H336zm-48 0c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48V336z"
						/>
					</svg>
				</a>
				<a href={`/user/${$page.data.user.username}/library`}>
					<span class="border-l-4 absolute left-0 w-1 h-8 border-transparent"></span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<path
							fill="#8870e6"
							d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32 32V448H416V384h32V0H416 384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-256H352v32H128V128zm224 64v32H128V192H352z"
						/>
					</svg>
				</a>
				<a href={`/user/${$page.data.user.username}/tests`}>
					<span class="border-l-4 absolute left-0 w-1 h-8 border-transparent"></span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
						<path
							fill="#8870e6"
							d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 192c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm64-64c0-17.7 14.3-32 32-32s32 14.3 32 32V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V160zM320 288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32z"
						/>
					</svg>
				</a>
			</div>
		</div>
		<div class="mt-auto">
			<button>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-8 h-8">
					<path
						fill="#8870e6"
						d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
					/>
				</svg>
			</button>
		</div>
	</section>
	<section class="bg-primary rounded-tl-[4rem] rounded-bl-[4rem] p-16">
		<slot />
	</section>
</div>

<style>
	/* .href-current:active > span {
		border-color: #8870e6;
	} */
</style>
