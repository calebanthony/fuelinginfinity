import { Generator } from 'manugo';
import { energy } from 'game/resources';

export class Processor extends Generator {
  constructor(name) {
    super(name);

    this.heat = 0;
    this.storedHeat = 0;
  }

  onTick() {
    const fuel = this.fuels ? this.fuels[this.dependencies.self.fuel] : energy;

    const { inputs, outputs, fuelCost } = this.recipes.find(({ name }) => name === this.dependencies.self.recipe);

    const hasResources = inputs.every(({ resource, count }) => {
      return this.dependencies[resource.name].count >= count;
    });

    if (hasResources && this.heat < fuelCost && fuel.decrement()) {
      this.heat += fuel.fuelValue;
    }

    if (this.heat >= fuelCost) {
      this.storedHeat += 1;
      this.heat -= 1;
    }

    if (this.storedHeat >= fuelCost) {
      this.storedHeat -= fuelCost;

      inputs.forEach(({ resource, count }) => {
        resource.decrement(count);
      });

      outputs.forEach(({ resource, count }) => {
        resource.increment(count);
      });
    }
  }

  onDeactivate() {
    this.heat = 0;
    this.storedHeat = 0;
  }

  changeFuel(fuel) {
    this.setStore('fuel', fuel);
  }

  changeRecipe(recipe) {
    this.setStore('recipe', recipe);
  }
}
