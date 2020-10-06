<script>
    import CrafterWithOptions from '../Machines/CrafterWithOptions.svelte';

    export let crafter;
</script>

{#if ['Compressor', 'Craft Gears', 'Craft Wire'].includes(crafter.name) && $crafter.unlocked}
    <CrafterWithOptions {crafter} />
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
