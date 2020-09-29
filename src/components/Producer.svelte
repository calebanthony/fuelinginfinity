<script>
    export let producer;
</script>

{#if $producer.unlocked}
    <div class="column is-4 box">
        <div class="level">
            <div class="level-item">
                <p class="icon is-medium {$producer.active ? 'has-text-success' : ''}">
                    <i class="fas fa-{producer.icon} fa-lg" />
                </p>
            </div>
            <div class="level-right">
                <div class="level-item buttons">
                    <button
                        title={producer.flavor}
                        class="button is-small"
                        on:click={() => producer.activate()}>
                        {producer.name}
                    </button>
                    <button
                        class="button is-danger is-small"
                        on:click={() => producer.deactivate()}>
                        <i class="fas fa-ban" />
                    </button>
                </div>
            </div>
        </div>
    </div>
{/if}
