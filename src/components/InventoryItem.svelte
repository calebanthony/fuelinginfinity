<script>
    export let item;
</script>

{#if $item.unlocked}
    <div class="panel-block columns">
        <div class="column is-2">
            <span class="icon">
                <i class="fas fa-{item.icon}" aria-hidden="true" />
            </span>
        </div>
        <div class="column is-6">{item.name}</div>
        <div class="column is-4">{$item.count}</div>
    </div>
{/if}
