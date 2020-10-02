<script>
    export let unlock;

    const runUnlock = unlock => {
        const worked = unlock.run();
        if (worked === false) {
            alert("Didn't work, sorry");
        }
    };
</script>

{#if !$unlock.unlocked && $unlock.visible}
    <div class="column is-6 box">
        <div class="level">
            <div class="level-item">
                <span class="has-text-weight-bold">Cost:</span>
                {#each unlock.costsToUnlock as cost}
                    <span class="icon is-medium" title={cost.model.name}>
                        <i class="fas fa-{cost.model.icon} fa-lg" />
                    </span>
                    <span>{cost.number}</span>
                {/each}
            </div>
            <div class="level-right">
                <div class="level-item buttons">
                    <button
                        title={unlock.description}
                        class="button"
                        on:click={() => runUnlock(unlock)}>
                        {unlock.name}
                    </button>
                </div>
            </div>
        </div>
    </div>
{/if}
