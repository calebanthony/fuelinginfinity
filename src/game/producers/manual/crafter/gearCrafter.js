import { ManualProducer } from '../manualProducer';
import { stick, processedStone, stoneGear, woodenGear } from 'game/resources';

class GearCrafter extends ManualProducer {
  constructor(name) {
    super(name);
    this.tickInterval = 55;

    this.dependencies = {
      [stick.name]: stick,
      [processedStone.name]: processedStone,
    };

    this.recipes = [
      { inputs: [{ resource: stick, count: 8 }], output: woodenGear },
      { inputs: [{ resource: processedStone, count: 4 }], output: stoneGear },
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

export const gearCrafter = new GearCrafter('Craft Gears')
  .setIcon('cog')
  .setFlavor('Turns raw resources into gears.')
  .setStore('recipe', 'Wooden Gear');
