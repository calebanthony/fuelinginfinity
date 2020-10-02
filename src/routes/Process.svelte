<script>
    import Processor from '../components/Processor.svelte';
    import * as processors from 'game/producers/processors';
</script>

<h2 class="title is-2">Process</h2>
<div class="columns is-multiline">
    {#each Object.values(processors) as processor}
        <Processor {processor} />
    {/each}
</div>
