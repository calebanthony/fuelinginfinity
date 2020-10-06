import { Processor } from './processor';
import { ironIngot, ironRod, ironPlate } from 'game/resources';

class Extruder extends Processor {
  constructor(name) {
    super(name);
    this.tickInterval = 90;

    this.recipes = [
      { name: 'Iron Rod', inputs: [{resource: ironIngot, count: 1}], outputs: [{resource: ironRod, count: 2}], fuelCost: 8 },
      { name: 'Iron Plate', inputs: [{resource: ironIngot, count: 1}], outputs: [{resource: ironPlate, count: 1}], fuelCost: 8 },
    ];

    this.dependencies = {
      [ironIngot.name]: ironIngot,
    };
  }
}

export const extruder = new Extruder('Extruder')
  .setIcon('slash')
  .setFlavor('Makes machinery components.')
  .setStore('recipe', 'Iron Rod');
