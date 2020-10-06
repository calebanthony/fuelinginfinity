import { Processor } from './processor';
import { stick, bronzeOre, bronzeIngot, tinOre, tinIngot, copperOre, copperIngot, log, charcoal } from 'game/resources';

class BaseFurnace extends Processor {
  constructor(name) {
    super(name);
    this.tickInterval = 65;

    this.fuels = {
      [stick.name]: stick,
      [charcoal.name]: charcoal,
    };

    this.recipes = [
      { name: 'Bronze Ingot', inputs: [{ resource: bronzeOre, count: 1}], outputs: [{ resource: bronzeIngot, count: 1 }], fuelCost: 12 },
      { name: 'Tin Ingot', inputs: [{ resource: tinOre, count: 1}], outputs: [{ resource: tinIngot, count: 1 }], fuelCost: 12 },
      { name: 'Copper Ingot', inputs: [{ resource: copperOre, count: 1}], outputs: [{ resource: copperIngot, count: 1 }], fuelCost: 12 },
      { name: 'Charcoal', inputs: [{ resource: log, count: 1}], outputs: [{ resource: charcoal, count: 1 }], fuelCost: 4 },
    ];

    this.dependencies = {
      [log.name]: log,
      [bronzeOre.name]: bronzeOre,
      [tinOre.name]: tinOre,
      [copperOre.name]: copperOre,
    };
  }
}

export const baseFurnace = new BaseFurnace('Basic Furnace')
  .setIcon('fireplace')
  .setFlavor('Smelts.')
  .setStore('fuel', 'Stick')
  .setStore('recipe', 'Bronze Ingot');
