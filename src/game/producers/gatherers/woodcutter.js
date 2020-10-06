import { Gatherer } from './baseClass';
import { log } from 'game/resources';

class Woodcutter extends Gatherer {
  constructor(name) {
    super(name);
    this.tickInterval = 100;
    this.energyCost = 10;
    this.outputItem = log;
  }
}

export const woodcutter = new Woodcutter('Woodcutter')
  .setIcon('staff')
  .setFlavor('Cuts wood.');
