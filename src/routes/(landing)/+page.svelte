<script lang="ts">
	import Doctor from '$lib/assets/doctor.svg';
	import BgOverlay from '$lib/assets/bg.png';
	import Logo from '$components/logo.svelte';
	import testsvg from '$lib/assets/benefit-message.svg';
</script>

<div class="text-center mt-24">
	<section class="grid grid-cols-2 max-w-[1280px] mx-auto h-[calc(100vh-89px)]" draggable="false">
		<div>
			<h1 class="text-5xl font-bold mb-8 leading-snug text-left">
				Zdigitalizujte svoju ambulanciu už <span class="text-icon">dnes</span>!
			</h1>
			<p class="text-xl leading-10 text-left font-medium">
				Či už chcete zistiť viac ohľadne vášho psychického stavu, vyhľadať tipy a triky na riešenie
				mentálnych problémov buď vás alebo vašich blízkych, alebo prosto máte záujem o psychológiu,
				práve táto stránka vám pomôže nájsť všetky odpovede na vaše otázky ohľadne všeobecného
				psychického zdravia.
			</p>
			<button
				type="button"
				class="font-bold bg-icon py-4 px-10 rounded-full flex mt-16 tracking-wider"
			>
				Začať
			</button>
		</div>
		<img
			src={BgOverlay}
			alt="landpage-icon"
			class="absolute bottom-0 z-[-1] right-10 w-[620px] xl:w-[720px] 2xl:w-[960px]"
			draggable="false"
		/>
	</section>
	<section class="bg-primary" id="services">
		<div class="h-12 md:h-20 xl:h-32"></div>

		<div class="max-w-[1280px] mx-auto text-left px-6 md:px-12 xl:flex xl:items-center xl:gap-16">
			<section class="xl:w-full">
				<h5 class="text-lg font-medium text-icon">Ponuka riešení</h5>
				<h2 class="text-5xl font-medium mt-4">
					Čo môžete očakávať od
					<span class="bg-gradient-to-tl from-primary to-icon bg-clip-text text-transparent">
						Health<span class="text-icon">.</span>On
					</span>
				</h2>
				<p class="font-medium mt-4">
					Určité benefity sú z praktických a bezpečnostných dôvodov dostupné iba pre registrovaných
					používateľov.
				</p>
				<button
					type="button"
					class="font-bold bg-icon py-4 px-10 rounded-full flex mt-8 tracking-wider"
				>
					Začať
				</button>
			</section>
			<section class="grid grid-cols-1 items-center gap-4 md:grid-cols-2 md:gap-6 xl:w-full">
				<div class="grid grid-cols-1 gap-4 md:gap-6">
					<div class="rounded-xl bg-accent/75 px-4 md:px-7 font-medium">
						<div class="h-5"></div>
						<div class="flex items-center gap-3 md:flex-col md:items-start">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-8 h-8">
								<path
									fill="#e3e3e3"
									d="M0 32C0 14.3 14.3 0 32 0H96c17.7 0 32 14.3 32 32V96H0V32zm0 96H128V384H0V128zM0 416H128v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V416zM160 32c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32V96H160V32zm0 96H288V384H160V128zm0 288H288v64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V416zm203.6-19.9L320 232.6V142.8l100.4-26.9 66 247.4L363.6 396.1zM412.2 85L320 109.6V11l36.9-9.9c16.9-4.6 34.4 5.5 38.9 22.6L412.2 85zM371.8 427l122.8-32.9 16.3 61.1c4.5 17-5.5 34.5-22.5 39.1l-61.4 16.5c-16.9 4.6-34.4-5.5-38.9-22.6L371.8 427z"
								/>
							</svg>
							<p>
								<a href="#materials">Náučné materiály</a>
							</p>
						</div>
						<div class="h-5"></div>
					</div>

					<div class="rounded-xl bg-accent/75 px-4 md:px-7 font-medium">
						<div class="h-5"></div>
						<div class="flex items-center gap-3 md:flex-col md:items-start">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-8 h-8"
								><path
									fill="#e3e3e3"
									d="M112 0C99.1 0 87.4 7.8 82.5 19.7l-66.7 160-13.3 32c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L66.7 224h90.7l5.1 12.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-13.3-32-66.7-160C136.6 7.8 124.9 0 112 0zm18.7 160H93.3L112 115.2 130.7 160zM256 32v96 96c0 17.7 14.3 32 32 32h80c44.2 0 80-35.8 80-80c0-23.1-9.8-43.8-25.4-58.4c6-11.2 9.4-24 9.4-37.6c0-44.2-35.8-80-80-80H288c-17.7 0-32 14.3-32 32zm96 64H320V64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16zm-32 64h32 16c8.8 0 16 7.2 16 16s-7.2 16-16 16H320V160zM566.6 310.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L352 434.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l192-192z"
								/></svg
							>

							<p>
								<a href="#tests">Testy a kvízy</a>
							</p>
						</div>
						<div class="h-5"></div>
					</div>
					<div class="rounded-xl bg-accent/75 px-4 md:px-7 font-medium">
						<div class="h-5"></div>
						<div class="flex items-center gap-3 md:flex-col md:items-start">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-8 h-8">
								<path
									fill="#e3e3e3"
									d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 192c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm64-64c0-17.7 14.3-32 32-32s32 14.3 32 32V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V160zM320 288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32z"
								/>
							</svg>
							<p>Personalizované výsledky</p>
						</div>
						<div class="h-5"></div>
					</div>
				</div>
				<div class="grid grid-cols-1 items-center gap-4 md:gap-6">
					<div class="rounded-xl bg-accent/75 px-4 md:px-7 font-medium">
						<div class="h-5"></div>
						<div class="flex items-center gap-3 md:flex-col md:items-start">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-8 h-8">
								<path
									fill="#e3e3e3"
									d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V192h64V32zm320 0c0-17.7-14.3-32-32-32s-32 14.3-32 32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM224 512c17.7 0 32-14.3 32-32V320H192V480c0 17.7 14.3 32 32 32zM320 0c-9.3 0-18.1 4-24.2 11s-8.8 16.3-7.5 25.5l31.2 218.6L288.6 409.7c-3.5 17.3 7.8 34.2 25.1 37.7s34.2-7.8 37.7-25.1l.7-3.6c1.3 16.4 15.1 29.4 31.9 29.4c17.7 0 32-14.3 32-32c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM112 80A48 48 0 1 0 16 80a48 48 0 1 0 96 0zm0 261.3V269.3l4.7 4.7c9 9 21.2 14.1 33.9 14.1H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H157.3l-41.6-41.6c-14.3-14.3-33.8-22.4-54-22.4C27.6 160 0 187.6 0 221.6v55.7l0 .9V480c0 17.7 14.3 32 32 32s32-14.3 32-32V384l32 42.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V421.3c0-10.4-3.4-20.5-9.6-28.8L112 341.3z"
								/>
							</svg>
							<p>Príprava na vyšetrenie</p>
						</div>
						<div class="h-5"></div>
					</div>
					<div class="rounded-xl bg-accent/75 px-4 md:px-7 font-medium">
						<div class="h-5"></div>
						<div class="flex items-center gap-3 md:flex-col md:items-start">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-8 h-8">
								<path
									fill="#e3e3e3"
									d="M0 32C0 14.3 14.3 0 32 0H352c17.7 0 32 14.3 32 32V64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64V32zm32 96H352v83.2c-57 29.1-96 88.4-96 156.8c0 54.5 24.8 103.3 63.8 135.6c-9.4 5.4-20.2 8.4-31.8 8.4H96c-35.3 0-64-28.7-64-64V416H144c8.8 0 16-7.2 16-16s-7.2-16-16-16H32V320H144c8.8 0 16-7.2 16-16s-7.2-16-16-16H32V224H144c8.8 0 16-7.2 16-16s-7.2-16-16-16H32V128zM304.8 300.5c6.7-12.6 23.6-13.5 33.7-3.4L502.9 461.5c10.1 10.1 9.2 27-3.4 33.7C479.4 505.9 456.4 512 432 512c-79.5 0-144-64.5-144-144c0-24.4 6.1-47.4 16.8-67.5zm254.5 135c-6.7 12.6-23.6 13.5-33.7 3.4L361.1 274.5c-10.1-10.1-9.2-27 3.4-33.7C384.6 230.1 407.6 224 432 224c79.5 0 144 64.5 144 144c0 24.4-6.1 47.4-16.8 67.5z"
								/>
							</svg>
							<p>Zápis liekov</p>
						</div>
						<div class="h-5"></div>
					</div>
				</div>
			</section>
		</div>
		<div class="h-12 md:h-20 xl:h-32"></div>
	</section>
	<section class="max-w-[1280px] mx-auto px-6 md:px-12">
		<div class="h-12 md:h-20 xl:h-32" id="statistics"></div>
		<div>
			<!-- <h5 class="text-lg font-medium text-icon text-center">Štatistiky</h5> -->
			<h2 class="text-center text-3xl font-bold md:text-5xl mt-3">Štatistiky</h2>

			<div class="grid grid-cols-1 gap-4 xl:grid-cols-3 xl:gap-5 mt-8 md:mt-12">
				<div class="rounded-xl bg-white/5 px-6 md:mx-auto md:w-[412px] xl:w-full">
					<div class="h-6 md:h-9"></div>
					<div>
						<p
							class="bg-gradient-to-tl from-primary to-icon bg-clip-text text-transparent text-4xl font-bold leading-10 md:text-5xl md:leading-[60px]"
						>
							1 z 8
						</p>
						<p class="font-medium text-left">
							ľudí v roku 2019 trpelo minimálne 1 mentálnou poruchou
						</p>
					</div>
					<div class="h-6 md:h-9"></div>
				</div>
				<div class="rounded-xl bg-white/5 px-6 md:mx-auto md:w-[412px] xl:w-full">
					<div class="h-6 md:h-9"></div>
					<div>
						<p
							class="bg-gradient-to-tl from-primary to-icon bg-clip-text text-transparent text-4xl font-bold leading-10 md:text-5xl md:leading-[60px]"
						>
							50%
						</p>
						<p class="font-medium text-left">
							zvýšenie výskytu všetkých mentálnych porúch od roku 1990 po rok 2013
						</p>
					</div>
					<div class="h-6 md:h-9"></div>
				</div>
				<div class="rounded-xl bg-white/5 px-6 md:mx-auto md:w-[412px] xl:w-full">
					<div class="h-6 md:h-9"></div>
					<div>
						<p
							class="bg-gradient-to-tl from-primary to-icon bg-clip-text text-transparent text-4xl font-bold leading-10 md:text-5xl md:leading-[60px]"
						>
							10-20%
						</p>
						<p class="font-medium text-left">
							rokov skrátená dĺžka života u ľudí so závažnou mentálnou poruchou
						</p>
					</div>
					<div class="h-6 md:h-9"></div>
				</div>
			</div>
		</div>
		<div class="h-12 md:h-20 xl:h-32"></div>
	</section>
	<section class="bg-primary">
		<div class="h-12 md:h-20 xl:h-32"></div>
		<div class="mx-auto max-w-[1280px] px-6 md:px-12">
			<div>
				<h5 class="text-lg font-medium text-icon text-center">Riešenia</h5>
				<h2 class="text-center text-3xl font-bold md:text-5xl mt-3">
					Komplexná starostlivosť o duševné zdravie
				</h2>
			</div>
			<div
				class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-2 text-left mt-8 md:mt-12 xl:mt-[4.5rem]"
			>
				<div class="grid grid-cols-1 gap-4 md:gap-6 items-center">
					<div class="rounded-xl bg-white/5 px-6 py-7">
						<p class="text-xl md:text-2xl font-medium leading-8 mt-3">Zápis liekov</p>
						<p class="text-sm leading-[22px] text-white/60 mt-3">
							Ak beriete viaceré lieky naraz, je dôležité mať prehľad v tom, či vám kvôli ich
							spoločnej spotrebe nehrozia nežiadúce účinky. Taktiež si podľa výsledkov z našich
							testov môžete zistiť aké druhy liekov sa väčšinou na isté problémy predpisujú a či na
							vás nebudú zle vplývať spolu s liekmi ktoré už momentálne užívate.
						</p>
					</div>
					<div class="rounded-xl bg-white/5 px-6 py-7">
						<p class="text-xl md:text-2xl font-medium leading-8 mt-3">Príprava na vyšetrenie</p>
						<p class="text-sm leading-[22px] text-white/60 mt-3">
							Či už máte záujem o vysvetlenie detailného postupu pri vyšetrení
							psychológom/psychiatrom, rady ako im vysvetliť svoj problém alebo im chcete podložiť
							výsledky z našich testov, u nás nájdete všetko potrebné pre dôkladne a pokojné
							vyšetrenie vášho duševného zdravia.
						</p>
					</div>
					<div class="rounded-xl bg-white/5 px-6 py-7">
						<p class="text-xl md:text-2xl font-medium leading-8 mt-3">Personalizované výsledky</p>
						<p class="text-sm leading-[22px] text-white/60 mt-3">
							Po dokončení akéhokoľvek testu/kvízu sa registrovaným používateľom uloží detailne
							popísaný výsledok. Po dokončení testu sa vyhodnotia vaše predpoklady ohľadne istých
							duševných problémov alebo v prípade kvízu sa vyhodnotia vaše znalosti.
						</p>
					</div>
				</div>
				<div class="grid grid-cols-1 gap-4 md:gap-6 items-center">
					<div class="rounded-xl bg-white/5 px-6 py-7">
						<p class="text-xl md:text-2xl font-medium leading-8 mt-3" id="materials">
							Náučné materiály
						</p>
						<p class="text-sm leading-[22px] text-white/60 mt-3">
							Vyberte si akúkoľvek časť z širokej škály všeobecnej psychológie ktorú vám ponúkame a
							využívajte ju na samoštúdium. Pri každej z nich je uvedený oficiálny zdroj z ktorého
							čerpáme uvedené informácie.
						</p>
					</div>
					<div class="rounded-xl bg-white/5 px-6 py-7">
						<p class="text-xl md:text-2xl font-medium leading-8 mt-3" id="tests">Testy a kvízy</p>
						<p class="text-sm leading-[22px] text-white/60 mt-3">
							Môžete otestovať svoje vedomosti alebo duševné zdravie pomocou našich kvízov a testov
							ktoré sú dostupné v dlhej ale aj krátkej podobe. Výsledky sa budú ukladať iba
							registrovaným používateľom.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="h-12 md:h-20 xl:h-32"></div>
	</section>
	<section class="bg-background flex justify-center">
		<div class="py-8">
			<Logo width={32} height={32} />
		</div>
	</section>
</div>
