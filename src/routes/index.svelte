<script>
    import { stick } from '../game/resources/stick';
    import { manualStick } from '../game/producers/manual';
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

You have { $stick } { $stick === 1 ? 'stick' : 'sticks' }.

<button class="button" on:click={() => manualStick.activate()}>
    Get More Sticks!
</button>

<button class="button is-danger" on:click={() => manualStick.deactivate()}>
    Stop Gathering!
</button>
