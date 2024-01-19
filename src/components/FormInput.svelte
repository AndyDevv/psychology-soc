<script lang="ts">
	export let item: string | boolean | number | undefined;
</script>

<div class="relative">
	<input
		{...$$restProps}
		required
		spellcheck="false"
		class="rounded font-semibold px-4 w-full outline-none h-10 mb-6 placeholder:font-medium placeholder:text-bg text-bg
        {item ? 'border-error border-[3px]' : ''}"
	/>
	{#if item}
		<span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				class="absolute w-5 h-5 top-2.5 right-3"
			>
				<path
					fill="#e85d75"
					d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm24-384v24V264v24H232V264 152 128h48zM232 368V320h48v48H232z"
				/>
			</svg>
		</span>
		<p class="text-error font-medium absolute top-11 text-xs">{item}</p>
	{/if}
</div>
