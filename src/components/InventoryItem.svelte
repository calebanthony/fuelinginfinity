<script>
    import Icon from './Partials/Icon.svelte';

    export let item;
</script>

{#if $item.unlocked}
    <div class="panel-block columns">
        <div class="column is-2">
            <span class="icon">
                <Icon icon={item.icon} color={item.iconColor} />
            </span>
        </div>
        <div class="column is-6">{item.name}</div>
        <div class="column is-4">{$item.count.toLocaleString()}</div>
    </div>
{/if}
