import { Generator } from 'manugo';
import { energy } from 'game/resources';

export class Gatherer extends Generator {
  constructor(name) {
    super(name);
  }

  onTick() {
    if (energy.decrement(this.energyCost)) {
      this.outputItem.increment();
    }
  }
}
