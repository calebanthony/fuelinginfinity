<script>
    import Icon from './Partials/Icon.svelte';
    import MachineToggle from './Partials/MachineToggle.svelte';
    import { energy } from 'game/resources';
    import { tickDuration } from 'game/config';

    export let gatherer;

    const ticksPerSecond = 1000 / tickDuration;
    const perSecond = (ticksPerSecond / gatherer.tickInterval).toLocaleString();
</script>

{#if $gatherer.unlocked}
    <div class="column is-4">
        <div class="box">
            <div class="level">
                <div class="level-left">
                    <div class="level-item">
                        <span class="icon is-medium {$gatherer.active ? 'has-text-success' : ''}">
                            <Icon icon={gatherer.icon} color={gatherer.iconColor} />
                        </span>
                        <span>{gatherer.name}</span>
                    </div>
                </div>
                <div class="level-right">
                    <div class="level-item buttons">
                        <MachineToggle machine={gatherer} />
                    </div>
                </div>
            </div>
            {#if gatherer.outputItem}
                <div class="level">
                    <div class="level-item">
                        <Icon icon={energy.icon} color={energy.iconColor} />
                        -{perSecond * gatherer.energyCost}/s
                    </div>
                    <div class="level-item">=></div>
                    <div class="level-item">
                        <Icon
                            icon={gatherer.outputItem.icon}
                            color={gatherer.outputItem.iconColor} />
                        +{perSecond}/s
                    </div>
                </div>
            {/if}
        </div>
    </div>
{/if}
