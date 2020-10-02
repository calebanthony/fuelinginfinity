<script>
    export let gatherer;
</script>

{#if $gatherer.unlocked}
    <div class="column is-4 box">
        <div class="level">
            <div class="level-item">
                <p class="icon is-medium {$gatherer.active ? 'has-text-success' : ''}">
                    <i class="fas fa-{gatherer.icon} fa-lg" />
                </p>
            </div>
            <div class="level-right">
                <div class="level-item buttons">
                    <button
                        title={gatherer.flavor}
                        class="button is-small"
                        on:click={() => gatherer.activate()}>
                        {gatherer.name}
                    </button>
                    <button
                        class="button is-danger is-small"
                        on:click={() => gatherer.deactivate()}>
                        <i class="fas fa-ban" />
                    </button>
                </div>
            </div>
        </div>
    </div>
{/if}
