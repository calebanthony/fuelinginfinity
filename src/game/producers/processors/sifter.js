import { Processor } from './processor';
import { processedStone, energy, tinDust, ironDust, copperDust } from 'game/resources';

class Sifter extends Processor {
  constructor(name) {
    super(name);
    this.tickInterval = 40;

    // Purely for UI, we don't pull this in on the onTick method at all
    this.recipes = [
      { name: 'Processed Stone', inputs: [{ resource: processedStone, count: 1 }], outputs: [{ resource: { name: 'Misc Dust' }, count: 1 }], fuelCost: 4 },
    ];

    this.dependencies = {
      [processedStone.name]: processedStone,
    };
  }

  onTick() {
    const fuel = energy;
    const fuelCost = 4;

    const hasResources = this.dependencies[processedStone.name].count >= 1;

    if (hasResources && this.heat < fuelCost && fuel.decrement()) {
      this.heat += fuel.fuelValue;
    }

    if (this.heat >= fuelCost) {
      this.storedHeat += 1;
      this.heat -= 1;
    }

    if (this.storedHeat >= fuelCost) {
      this.storedHeat -= fuelCost;

      processedStone.decrement();

      // Gets a random number from 0 to 100.
      const randomNumber = Math.floor(Math.random() * Math.floor(100));

      if (randomNumber < 30) {
        tinDust.increment();
      }
      if (randomNumber >= 30 && randomNumber < 60) {
        copperDust.increment();
      }
      if (randomNumber >= 60 && randomNumber < 90) {
        ironDust.increment();
      }
    }
  }

}

export const sifter = new Sifter('Sifter')
  .setIcon('filter')
  .setFlavor('Sifts processed stone into usable dusts.')
  .setStore('recipe', 'Dust');
