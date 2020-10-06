import { ManualProducer } from '../manualProducer';
import { tinIngot, tinWire, copperIngot, copperWire } from 'game/resources';

class WireCrafter extends ManualProducer {
  constructor(name) {
    super(name);
    this.tickInterval = 75;

    this.recipes = [
      { inputs: [ { resource: tinIngot, count: 3 } ], output: tinWire },
      { inputs: [ { resource: copperIngot, count: 3 } ], output: copperWire },
    ];

    this.dependencies = {
      [tinIngot.name]: tinIngot,
      [copperIngot.name]: copperIngot,
    };
  }

  onTick() {
    const recipe = this.recipes.find((recipe) => recipe.output.name === this.dependencies.self.recipe);

    const hasResources = recipe.inputs.every(({ resource, count }) => {
      return this.dependencies[resource.name].count >= count;
    });

    if (hasResources) {
      recipe.inputs.forEach(({ resource, count }) => {
        resource.decrement(count);
      });
      recipe.output.increment();
    }
  }

  changeRecipe(recipe) {
    this.setStore('recipe', recipe);
  }
}

export const wireCrafter = new WireCrafter('Craft Wire')
  .setIcon('ethernet')
  .setFlavor('Turns raw resources into useful wires.')
  .setStore('recipe', 'Tin Wire');
