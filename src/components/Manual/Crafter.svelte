<script>
    import Compressor from '../Machines/Compressor.svelte';
    import GearCrafter from '../Machines/GearCrafter.svelte';

    export let crafter;
</script>

{#if crafter.name === 'Compressor' && $crafter.unlocked}
    <Compressor {crafter} />
{:else if crafter.name === 'Craft Gears' && $crafter.unlocked}
    <GearCrafter {crafter} />
{:else if $crafter.unlocked}
    <div class="column is-4 box">
        <div class="level">
            <div class="level-item">
                <p class="icon is-medium {$crafter.active ? 'has-text-success' : ''}">
                    <i class="fas fa-{crafter.icon} fa-lg" />
                </p>
            </div>
            <div class="level-right">
                <div class="level-item buttons">
                    <button
                        title={crafter.flavor}
                        class="button is-small"
                        on:click={() => crafter.activate()}>
                        {crafter.name}
                    </button>
                    <button class="button is-danger is-small" on:click={() => crafter.deactivate()}>
                        <i class="fas fa-ban" />
                    </button>
                </div>
            </div>
        </div>
    </div>
{/if}
