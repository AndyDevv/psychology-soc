<script lang="ts">
	import * as SC from 'svelte-cubed';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';

	// Component Props
	export let modelURL: string;
	export let scale = [1, 1, 1] as [number, number, number];
	export let position = [0, 0, 0] as [number, number, number];
	export let rotation = [0, 0, 0] as [number, number, number];
	export let name = 'UniqueName_' + Math.random() + Date.now();

	let model: any = null;

	// 	Custom Event to track loading status from parent
	const dispatch = createEventDispatcher();
	function emitStatus(status: string) {
		dispatch('statusChange', { name, status });
	}

	function loadGLTF() {
		const loader = new GLTFLoader();
		return loader.loadAsync(modelURL);
	}

	onMount(() => {
		if (modelURL) {
			emitStatus('LOADING');
			loadGLTF()
				.then((_model) => {
					model = _model;
					emitStatus('SUCCESS');
				})
				.catch((err) => {
					console.error('Error loading model:', name, err);
					emitStatus('ERROR');
				});
		}
	});
</script>

{#if model}
	<!-- @ts-ignore -->
	<SC.Primitive object={model.scene} {scale} {position} {rotation} />
{/if}
