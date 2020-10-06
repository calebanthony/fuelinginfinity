<script>
    import Icon from './Partials/Icon.svelte';
    import { energy } from 'game/resources';
    import { tickDuration } from 'game/config';

    export let producer;

    const ticksPerSecond = 1000 / tickDuration;
    const perSecond = (ticksPerSecond / producer.tickInterval).toLocaleString();
</script>

{#if $producer.unlocked}
    <div class="column is-4 box">
        <div class="level">
            <div class="level-left">
                <div class="level-item">
                    <span class="icon is-medium">
                        <Icon icon={producer.icon} color={producer.iconColor} />
                    </span>
                    <span>{producer.name}</span>
                </div>
            </div>
            <div class="level-right">
                <div class="level-item buttons">
                    {#if !$producer.active}
                        <button
                            title={producer.flavor}
                            class="button is-small"
                            on:click={() => producer.activate()}>
                            Start
                        </button>
                    {:else}
                        <button
                            class="button is-danger is-small"
                            on:click={() => producer.deactivate()}>
                            <i class="fas fa-ban" />
                        </button>
                    {/if}
                </div>
            </div>
        </div>
        <div class="level">
            <div class="level-item">
                <Icon icon={energy.icon} color={energy.iconColor} />
                -{perSecond * producer.energyCost}/s
            </div>
            <div class="level-item">=></div>
            <div class="level-item">
                <Icon icon={producer.outputItem.icon} color={producer.outputItem.iconColor} />
                +{perSecond}/s
            </div>
        </div>
    </div>
{/if}
