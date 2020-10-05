<script>
    export let crafter;

    function cost(recipe) {
        return recipe.inputs.map(({ resource, count }) => {
            return `${count} ${resource.name}`;
        });
    }
</script>

<div class="column is-4 box">
    <div class="level">
        <div class="level-left">
            <div class="level-item">
                <span class="icon is-medium {$crafter.active ? 'has-text-success' : ''}">
                    <i class="fas fa-{crafter.icon} fa-fw" />
                </span>
                <span>{crafter.name}</span>
            </div>
        </div>
        <div class="level-right">
            <div class="level-item buttons">
                {#if !$crafter.active}
                    <button
                        title={crafter.flavor}
                        class="button is-small"
                        on:click={() => crafter.activate()}>
                        Start
                    </button>
                {:else}
                    <button class="button is-danger is-small" on:click={() => crafter.deactivate()}>
                        <i class="fas fa-ban" />
                    </button>
                {/if}
            </div>
        </div>
    </div>
    <span class="has-text-weight-bold">Selected Recipe</span>
    <div class="select is-fullwidth">
        <select on:blur={e => crafter.changeRecipe(e.target.value)}>
            {#each crafter.recipes as recipe}
                {#if $crafter.recipe === recipe.output.name}
                    <option value={recipe.output.name} selected>
                        {recipe.output.name} ({cost(recipe)})
                    </option>
                {:else}
                    <option value={recipe.output.name}>
                        {recipe.output.name} ({cost(recipe)})
                    </option>
                {/if}
            {/each}
        </select>
    </div>

</div>
