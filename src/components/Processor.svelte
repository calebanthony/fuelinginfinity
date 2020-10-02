<script>
    import BaseFurnace from './Machines/BaseFurnace.svelte';

    export let processor;
    import { tickDuration } from 'game/config';

    const fuels = ['Sticks'];

    const ticksPerSecond = 1000 / tickDuration;
    const perSecond = (ticksPerSecond / processor.tickInterval).toLocaleString();
</script>

{#if processor.name === 'Basic Furnace' && $processor.unlocked}
    <BaseFurnace {processor} />
{:else if $processor.unlocked}
    <div class="column is-4 box">
        <div class="level">
            <div class="level-left">
                <div class="level-item">
                    <span class="icon is-medium {$processor.active ? 'has-text-success' : ''}">
                        <i class="fas fa-{processor.icon} fa-fw" />
                    </span>
                    <span>{processor.name}</span>
                </div>
            </div>
            <div class="level-right">
                <div class="level-item buttons">
                    {#if !$processor.active}
                        <button
                            title={processor.flavor}
                            class="button is-small"
                            on:click={() => processor.activate()}>
                            Start
                        </button>
                    {:else}
                        <button
                            class="button is-danger is-small"
                            on:click={() => processor.deactivate()}>
                            <i class="fas fa-ban" />
                        </button>
                    {/if}
                </div>
            </div>
        </div>
    </div>
{/if}
