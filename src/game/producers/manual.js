import { Producer } from 'manugo';
import { stick } from '../resources/stick';

class StickCreator extends Producer {
  constructor(tickInterval) {
    super();
    this.tickInterval = tickInterval;
  }

  onTick() {
    stick.increment(2);
  }
}

export const manualStick = new StickCreator(5);
