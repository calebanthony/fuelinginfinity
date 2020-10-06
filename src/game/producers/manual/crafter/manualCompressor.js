import { ManualProducer } from '../manualProducer';
import { tinDust, copperDust, bronzeOre, tinOre, copperOre, ironDust, ironOre } from 'game/resources';

class ManualCompressor extends ManualProducer {
  constructor(name) {
    super(name);
    this.tickInterval = 35;
    this.dependencies = { 
      [tinDust.name]: tinDust,
      [copperDust.name]: copperDust,
      [ironDust.name]: ironDust,
    };

    this.recipes = [
      { inputs: [ { resource: tinDust, count: 1 }, { resource: copperDust, count: 1 }], output: bronzeOre },
      { inputs: [ { resource: tinDust, count: 3 } ], output: tinOre },
      { inputs: [ { resource: copperDust, count: 3 }], output: copperOre },
      { inputs: [ { resource: ironDust, count: 3 }], output: ironOre },
    ];
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

export const manualCompressor = new ManualCompressor('Compressor')
  .setIcon('compress')
  .setFlavor('Turns dust into ore.')
  .setStore('recipe', 'Bronze Ore');
