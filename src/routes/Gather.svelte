<script>
    import Gatherer from '../components/Gatherer.svelte';
    import * as gatherers from 'game/producers/gatherers';
</script>

<h2 class="title is-2">Gather</h2>
<div class="columns is-multiline">
    {#each Object.values(gatherers) as producer}
        <Gatherer {producer} />
    {/each}
</div>
