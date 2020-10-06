<script>
    export let machine;
</script>

{#if !$machine.active}
    <button title={machine.flavor} class="button is-small" on:click={() => machine.activate()}>
        Start
    </button>
{:else}
    <button class="button is-danger is-small" on:click={() => machine.deactivate()}>
        <i class="fas fa-ban" />
    </button>
{/if}
