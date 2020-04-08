<script>
    // Import components
    import ResourcePanel from '../components/ResourcePanel.svelte';
    import Producer from '../components/Producer.svelte';
    import Craftable from '../components/Craftable.svelte';
    import { unlocks } from '../game/unlocks';
    import { producers } from '../game/producers';
</script>

<svelte:head>
    <title>Fueling Infinity</title>
</svelte:head>

<div class="columns">
    <div class="column is-3">
        <ResourcePanel />
    </div>
    <div class="column is-9">
        <h2 class="title is-2">Produce</h2>
        <div class="columns is-multiline">
            {#each Object.values(producers) as producer}
                <Producer {producer} />
            {/each}
        </div>

        <hr />
        <h2 class="title is-2">Craft</h2>
        <div class="columns is-multiline">
            {#each Object.values(unlocks) as unlock}
                <Craftable {unlock} />
            {/each}
        </div>
    </div>
</div>
