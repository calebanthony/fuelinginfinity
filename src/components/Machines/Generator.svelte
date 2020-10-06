<script>
    import MachineToggle from '../Partials/MachineToggle.svelte';

    export let generator;

    $: fuelValue = fuelString => generator.fuels[fuelString].fuelValue / 2;
</script>

<div class="column is-4">
    <div class="box">
        <div class="level">
            <div class="level-left">
                <div class="level-item">
                    <span class="icon is-medium {$generator.active ? 'has-text-success' : ''}">
                        <i class="fas fa-{generator.icon} fa-fw" />
                    </span>
                    <span>{generator.name}</span>
                </div>
            </div>
            <div class="level-right">
                <div class="level-item buttons">
                    <MachineToggle machine={generator} />
                </div>
            </div>
        </div>
        <span class="has-text-weight-bold">Active Fuel</span>
        <div class="select is-fullwidth">
            <select on:blur={e => generator.changeFuel(e.target.value)}>
                {#each Object.keys(generator.fuels) as fuel}
                    {#if $generator.fuel === fuel}
                        <option value={fuel} selected>{fuel} ({fuelValue(fuel)} Energy)</option>
                    {:else}
                        <option value={fuel}>{fuel} ({fuelValue(fuel)} Energy)</option>
                    {/if}
                {/each}
            </select>
        </div>
    </div>
</div>
