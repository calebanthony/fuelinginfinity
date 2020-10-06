import { Processor } from './processor';
import { roughStone, processedStone } from 'game/resources';

class Grinder extends Processor {
  constructor(name) {
    super(name);
    this.tickInterval = 40;

    this.recipes = [
      { name: 'Processed Stone', inputs: [{resource: roughStone, count: 1}], outputs: [{resource: processedStone, count: 1}], fuelCost: 4 },
    ];

    this.dependencies = {
      [roughStone.name]: roughStone,
    };
  }
}

export const grinder = new Grinder('Grinder')
  .setIcon('mortar-pestle')
  .setFlavor('Grinds up rough stone into processed stone.')
  .setStore('recipe', 'Processed Stone');
