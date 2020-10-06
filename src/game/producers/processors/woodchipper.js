import { Processor } from './processor';
import { log, stick } from 'game/resources';

class Woodchipper extends Processor {
  constructor(name) {
    super(name);
    this.tickInterval = 30;

    this.recipes = [
      { name: 'Sticks', inputs: [{resource: log, count: 1}], outputs: [{resource: stick, count: 6}], fuelCost: 2 },
    ];

    this.dependencies = {
      [log.name]: log,
    };
  }
}

export const woodchipper = new Woodchipper('Woodchipper')
  .setIcon('staff')
  .setFlavor('Breaks down logs into sticks.')
  .setStore('recipe', 'Sticks');
