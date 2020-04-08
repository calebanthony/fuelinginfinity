<script>
    export let producer;
</script>

{#if !$producer.unlocked}
    <div class="column is-4 box">
        <div class="level">
            <div class="level-item">
                <p class="icon is-medium {$producer.active ? 'has-text-success' : ''}">
                    <i class="fas fa-{producer.icon} fa-lg" />
                </p>
            </div>
            <div class="level-right">
                <div class="level-item buttons">
                    <button class="button" on:click={() => producer.activate()}>
                        {producer.name}
                    </button>
                    <button class="button is-danger" on:click={() => producer.deactivate()}>
                        Stop
                    </button>
                </div>
            </div>
        </div>
    </div>
{/if}
