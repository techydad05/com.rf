<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
    import { getProducts, productStore } from "../stores/productStore";
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	{#await getProducts()}
		<h1 class="text-2xl font-light">Loading...</h1>
	{:then data}
	<!-- <button on:click={() => createCart()} class="btn btn-primary mb-2">create cart</button>
	<button on:click={() => getCart()} class="btn btn-primary mb-2">get cart</button> -->
	
	<div class="bg-slate-600">
		{#each $productStore as product}
			<img class="p-4 float-left w-1/3" src={product.thumbnail} width="400px" alt={""} />
		{/each}
	</div>
	{:catch error}
		{() => console.log(error)}
	{/await}
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>
	</h1>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
