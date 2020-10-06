import { ManualProducer } from '../manualProducer';
import { stick } from 'game/resources';

class StickProducer extends ManualProducer {
  constructor(name) {
    super(name);
    this.tickInterval = 20;
  }

  onTick() {
    stick.increment();
  }
}

export const stickProducer = new StickProducer('Gather Sticks').setIcon('staff').unlock();
