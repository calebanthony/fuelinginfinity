import { ManualProducer } from '../manualProducer';
import { stick } from 'game/resources';

class StickProducer extends ManualProducer {
  constructor(name) {
    super(name);
    this.tickInterval = 9;
  }

  onTick() {
    stick.increment(40);
  }
}

export const stickProducer = new StickProducer('Gather Sticks').setIcon('staff').unlock();
