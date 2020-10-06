<script>
    import Generator from '../components/Machines/Generator.svelte';
    import * as generators from 'game/producers/generators';
</script>

<h2 class="title is-2">Energy</h2>
<div class="columns is-multiline">
    {#each Object.values(generators) as generator}
        <Generator {generator} />
    {/each}
</div>
