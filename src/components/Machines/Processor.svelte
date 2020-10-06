<script>
    import { tickDuration } from 'game/config';
    export let processor;

    const ticksPerSecond = 1000 / tickDuration;
    const perSecond = (ticksPerSecond / processor.tickInterval).toLocaleString();
</script>

<div class="column is-4">
    <div class="box">
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
        {#if processor.fuels}
            <span class="has-text-weight-bold">Selected Fuel</span>
            <div class="select is-fullwidth">
                <select on:blur={e => processor.changeFuel(e.target.value)}>
                    {#each Object.keys(processor.fuels) as fuel}
                        {#if $processor.fuel === fuel}
                            <option value={fuel} selected>
                                {fuel} ({processor.fuels[fuel].fuelValue} Value)
                            </option>
                        {:else}
                            <option value={fuel}>
                                {fuel} ({processor.fuels[fuel].fuelValue} Value)
                            </option>
                        {/if}
                    {/each}
                </select>
            </div>
        {/if}
        {#if processor.recipes}
            <span class="has-text-weight-bold">Selected Recipe</span>
            <div class="select is-fullwidth">
                <select on:blur={e => processor.changeRecipe(e.target.value)}>
                    {#each processor.recipes as recipe}
                        {#if $processor.recipe === recipe.name}
                            <option value={recipe.name} selected>
                                {recipe.name} ({recipe.fuelCost} Cost)
                            </option>
                        {:else}
                            <option value={recipe.name}>
                                {recipe.name} ({recipe.fuelCost} Cost)
                            </option>
                        {/if}
                    {/each}
                </select>
            </div>
        {/if}
    </div>
</div>
