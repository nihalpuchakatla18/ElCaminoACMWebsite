<script lang="ts">
	import { onMount } from 'svelte';

	let theme = 'light';

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			theme = savedTheme;
			document.documentElement.classList.toggle('dark', theme === 'dark');
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			theme = 'dark';
			document.documentElement.classList.add('dark');
		}
	});

	function toggleTheme() {
		theme = theme === 'light' ? 'dark' : 'light';
		document.documentElement.classList.toggle('dark', theme === 'dark');
		localStorage.setItem('theme', theme);
	}

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		// Handle form submission here, e.g., send to API or log
		console.log('Form submitted:', form.elements);
		alert('Form submitted! (Check console for details)');
	}
</script>

<div
	class="flex min-h-screen flex-col items-center justify-center bg-white p-4 text-black transition-colors duration-300 dark:bg-black dark:text-white"
>
	<header class="mb-8 w-full max-w-2xl">
		<h1 class="text-center text-4xl font-bold">Getting in Touch 🤔</h1>
	</header>

	<main class="w-full max-w-2xl">
		<form on:submit={handleSubmit} class="space-y-4">
			<div>
				<label for="email" class="mb-1 block text-sm font-medium">El Camino Email</label>
				<input
					type="email"
					id="email"
					name="email"
					required
					class="w-full rounded-md border border-black bg-transparent px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none dark:border-white dark:focus:ring-white"
				/>
			</div>
			<div>
				<label for="title" class="mb-1 block text-sm font-medium">Title</label>
				<input
					type="text"
					id="title"
					name="title"
					required
					class="w-full rounded-md border border-black bg-transparent px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none dark:border-white dark:focus:ring-white"
				/>
			</div>
			<div>
				<label for="content" class="mb-1 block text-sm font-medium">Content</label>
				<textarea
					id="content"
					name="content"
					required
					rows="5"
					class="w-full rounded-md border border-black bg-transparent px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none dark:border-white dark:focus:ring-white"
				></textarea>
			</div>
			<button
				type="submit"
				class="w-full rounded-md bg-black px-4 py-2 text-white transition-opacity duration-200 hover:opacity-90 dark:bg-white dark:text-black"
			>
				Submit
			</button>
		</form>
	</main>

	<footer class="mt-8 flex w-full max-w-2xl justify-end">
		<button
			on:click={toggleTheme}
			class="rounded-md bg-black px-4 py-2 text-white transition-opacity duration-200 hover:opacity-90 dark:bg-white dark:text-black"
		>
			Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
		</button>
	</footer>
</div>

<style lang="postcss">
	:global(html) {
		transition:
			background-color 0.3s,
			color 0.3s;
	}
</style>
