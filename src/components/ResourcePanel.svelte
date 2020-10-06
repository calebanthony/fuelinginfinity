<script>
    import InventoryItem from './InventoryItem';
    import * as resources from 'game/resources';

    let filter = '';
    $: filteredResources = Object.values(resources)
        .filter(resource => {
            return resource.name.toLowerCase().includes(filter);
        })
        .filter(resource => resource.name !== 'Energy');
</script>

<nav class="panel resource-panel">
    <p class="panel-heading">Resources</p>
    <div class="panel-block">
        <p class="control has-icons-left">
            <input bind:value={filter} class="input" type="text" placeholder="Filter" />
            <span class="icon is-left">
                <i class="fas fa-sack" aria-hidden="true" />
            </span>
        </p>
    </div>
    {#each Object.values(filteredResources) as item}
        <InventoryItem bind:item />
    {/each}
</nav>
