<script>
    import Gatherer from '../components/Gatherer.svelte';
    import ManualCrafter from '../components/Manual/Crafter.svelte';
    import * as manualGatherers from 'game/producers/manual/gatherer';
    import * as manualCrafters from 'game/producers/manual/crafter';
</script>

<h2 class="title is-2">Produce</h2>
<div class="columns is-multiline">
    {#each Object.values(manualGatherers) as gatherer}
        <Gatherer {gatherer} />
    {/each}
</div>

<hr />

<h2 class="title is-2">Craft</h2>
<div class="columns is-multiline">
    {#each Object.values(manualCrafters) as crafter}
        <ManualCrafter {crafter} />
    {/each}
</div>
