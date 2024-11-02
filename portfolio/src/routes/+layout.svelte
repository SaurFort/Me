<script>
	import Header from './Header.svelte';
	import '../app.css';
	
	let { children } = $props();
</script>

<Header />

<main class="app">
	{@render children()}
</main>
