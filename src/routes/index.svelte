<script>
    // Import components
    import ResourcePanel from '../components/ResourcePanel.svelte';
    import Producer from '../components/Producer.svelte';
    import Unlockable from '../components/Unlockable.svelte';
    import * as unlocks from 'game/unlocks';
    import * as producers from 'game/producers';
</script>

<svelte:head>
    <title>Fueling Infinity</title>
</svelte:head>

<div class="columns">
    <div class="column is-3">
        <ResourcePanel />
    </div>
    <div class="column is-9">
        <h2 class="title is-2">Manually Produce</h2>
        <p class="subtitle is-size-6">Only 1 can run at a time.</p>
        <div class="columns is-multiline">
            {#each Object.values(producers) as producer}
                <Producer {producer} />
            {/each}
        </div>

        <hr />
        <h2 class="title is-2">Unlocks</h2>
        <div class="columns is-multiline">
            {#each Object.values(unlocks) as unlock}
                <Unlockable {unlock} />
            {/each}
        </div>
    </div>
</div>
