import { BaseProducer } from './baseProducer';
import { stick } from '../resources/stick';

class StickProducer extends BaseProducer {
  constructor(name) {
    super(name);
    this.tickInterval = 4;
  }

  onTick() {
    stick.increment(1);
  }
}

export const stickProducer = new StickProducer('Gather Sticks').setIcon('staff').unlock();
