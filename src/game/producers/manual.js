import { Producer } from 'manugo';
import { stick } from '../resources/stick';

class StickCreator extends Producer {
  constructor(tickInterval) {
    super();
    this.tickInterval = tickInterval;
  }

  produces() {
    stick.increment();
  }
}

export const manual = new StickCreator(10);
