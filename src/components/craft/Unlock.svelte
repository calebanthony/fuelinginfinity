<script>
    export let unlock;
</script>

{#if !$unlock.unlocked}
    <div class="column is-4 box">
        <div class="level">
            <div class="level-item">
                <span class="has-text-weight-bold">Cost:</span>
                <span class="icon is-medium" title={unlock.cost.model.name}>
                    <i class="fas fa-{unlock.cost.model.icon} fa-lg" />
                </span>
                <span>{$unlock.cost.quantity}</span>
            </div>
            <div class="level-right">
                <div class="level-item buttons">
                    <button title={unlock.description} class="button" on:click={() => unlock.run()}>
                        {unlock.name}
                    </button>
                </div>
            </div>
        </div>
    </div>
{/if}
