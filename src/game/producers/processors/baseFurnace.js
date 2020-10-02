import { Generator } from 'manugo';
import { stick, bronzeOre, bronzeIngot } from 'game/resources';

class BaseFurnace extends Generator {
  constructor(name) {
    super(name);
    this.tickInterval = 65;

    this.fuels = {
      [stick.name]: stick,
    };

    this.recipes = [
      { input: bronzeOre, output: bronzeIngot, fuelCost: 12 },
    ];

    this.heat = 0;
  }

  onTick() {
    const fuel = this.fuels[this.dependencies.self.fuel];
    const recipe = this.recipes.find((recipe) => recipe.output.name === this.dependencies.self.recipe);

    if (fuel.decrement()) {
      this.heat += fuel.fuelValue;

      if (this.heat >= recipe.fuelCost) {
        recipe.input.decrement();
        recipe.output.increment();
        this.heat -= recipe.fuelCost;
      }
    }
  }

  onDeactivate() {
    this.heat = 0;
  }

  changeFuel(fuel) {
    this.setStore('fuel', fuel);
  }

  changeRecipe(recipe) {
    this.setStore('recipe', recipe);
  }
}

export const baseFurnace = new BaseFurnace('Basic Furnace')
  .setIcon('fireplace')
  .setFlavor('Smelts.')
  .setStore('fuel', 'Stick')
  .setStore('recipe', 'Bronze Ingot');
