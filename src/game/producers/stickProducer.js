import { Generator } from 'manugo';
import { stick } from '../resources/stick';

class StickProducer extends Generator {
  constructor(name) {
    super(name);
    this.tickInterval = 5;
  }

  onTick() {
    stick.increment(2);
  }
}

export const stickProducer = new StickProducer('Gather Sticks').setIcon('staff');
