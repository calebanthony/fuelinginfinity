import { Gatherer } from './baseClass';
import { roughStone } from 'game/resources';

class Excavator extends Gatherer {
  constructor(name) {
    super(name);
    this.tickInterval = 90;
    this.energyCost = 4;
    this.outputItem = roughStone;
  }
}

export const excavator = new Excavator('Excavator')
  .setIcon('snowplow')
  .setFlavor('Excavates rough stone.');
