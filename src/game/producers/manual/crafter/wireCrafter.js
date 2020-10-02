import { ManualProducer } from '../manualProducer';
import { tinIngot, tinWire, copperIngot, copperWire } from 'game/resources';

class WireCrafter extends ManualProducer {
  constructor(name) {
    super(name);
    this.tickInterval = 75;

    this.recipes = [
      { input: tinIngot, inputCost: 3, output: tinWire },
      { input: copperIngot, inputCost: 3, output: copperWire },
    ];
  }

  onTick() {
    const recipe = this.recipes.find((recipe) => recipe.output.name === this.dependencies.self.recipe);

    if (recipe.input.decrement(recipe.inputCost)) {
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
