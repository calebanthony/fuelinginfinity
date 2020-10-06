import { Generator } from 'manugo';
import { energy } from 'game/resources';

export class Processor extends Generator {
  constructor(name) {
    super(name);

    this.heat = 0;
  }

  onTick() {
    const fuel = this.fuels ? this.fuels[this.dependencies.self.fuel] : energy;

    const { inputs, outputs, fuelCost } = this.recipes.find(({ name }) => name === this.dependencies.self.recipe);

    const hasResources = inputs.every(({ resource, count }) => {
      return this.dependencies[resource.name].count >= count;
    });

    if (fuel.decrement() && hasResources) {
      this.heat += fuel.fuelValue;

      if (this.heat >= fuelCost) {
        inputs.forEach(({ resource, count }) => {
          resource.decrement(count);
        });

        outputs.forEach(({ resource, count }) => {
          resource.increment(count);
        });
        
        this.heat -= fuelCost;
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
