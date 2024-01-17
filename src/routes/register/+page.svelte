<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import { enhance } from '$app/forms';

	export let form: ActionData;
</script>

<form
	method="POST"
	use:enhance
	class="flex flex-col items-center justify-center gap-y-4 max-w-[400px] mx-auto p-8 rounded glassmorph mt-36"
>
	<h1 class="text-3xl font-bold mb-4">Register</h1>
	<div class="relative">
		<input
			name="username"
			type="text"
			pattern="[a-zA-Z]+"
			title="Username must contain only letters"
			placeholder="Username"
			required
			spellcheck="false"
			class="rounded font-semibold px-4 w-full outline-none h-10 mb-6 placeholder:font-medium placeholder:text-bg text-bg
			{form?.username ? 'border-error border-[3px]' : ''}"
		/>
		{#if form?.username}
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
			<p class="text-error font-medium absolute top-11 text-xs">{form.message}</p>
		{/if}
	</div>
	<div class="relative">
		<input
			name="email"
			type="email"
			placeholder="Email"
			required
			spellcheck="false"
			class="rounded font-semibold px-4 w-full outline-none h-10 mb-6 placeholder:font-medium placeholder:text-bg text-bg
			{form?.email ? 'border-error border-[3px]' : ''}"
		/>
		{#if form?.email}
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
			<p class="text-error font-medium absolute top-11 text-xs">{form.message}</p>
		{/if}
	</div>
	<!-- svelte-ignore empty-block -->
	<input
		name="password"
		type="password"
		minlength="8"
		placeholder="Password"
		required
		spellcheck="false"
		class="rounded font-semibold px-4 w-full outline-none h-10 mb-4 placeholder:font-medium placeholder:text-bg text-bg"
	/>

	<button
		type="submit"
		class="bg-accent rounded cursor-pointer text-white py-[0.625rem] px-[1.875rem] mt-[0.625rem] font-semibold inline-block"
	>
		Register
	</button>

	<!-- For already account -->
	<p class="mt-4 text-xs">
		Already have an account? <span class="text-accent"><a href="/login">Login</a></span>
	</p>
</form>

<style>
	.glassmorph {
		background: rgba(102, 86, 191, 0.1);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.18);
	}
</style>
