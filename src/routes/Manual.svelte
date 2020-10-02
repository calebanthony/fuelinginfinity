<script>
    import ResourcePanel from '../components/ResourcePanel.svelte';
    import Producer from '../components/Producer.svelte';
    import * as manualProducers from 'game/producers/manual';
</script>

<h2 class="title is-2">Manually Produce</h2>
<p class="subtitle is-size-6">Only 1 can run at a time.</p>
<div class="columns is-multiline">
    {#each Object.values(manualProducers) as producer}
        <Producer {producer} />
    {/each}
</div>
