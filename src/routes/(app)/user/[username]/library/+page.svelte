<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<section class="text-center">
		<h1 class="text-5xl font-bold mb-6">Knižnica</h1>
		<form class="flex justify-center">
			<button type="submit" class="bg-icon rounded-tl-3xl rounded-bl-3xl px-4">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-8 h-8">
					<path
						fill="#FFFFFF"
						d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
					/>
				</svg>
			</button>
			<input
				type="search"
				name="search"
				id="search"
				placeholder="Search for something..."
				spellcheck="false"
				class="bg-search outline-none p-2 py-4 rounded-tr-3xl rounded-br-3xl"
			/>
		</form>
	</section>
	<section></section>
</div>
