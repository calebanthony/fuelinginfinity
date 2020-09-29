import { BaseProducer } from 'game/producers/baseProducer';
import { stick } from 'game/resources/stick';

class StickProducer extends BaseProducer {
  constructor(name) {
    super(name);
    this.tickInterval = 9;
  }

  onTick() {
    stick.increment(40);
  }
}

export const stickProducer = new StickProducer('Gather Sticks').setIcon('staff').unlock();
