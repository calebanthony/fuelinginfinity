import { Producer } from 'manugo';
import { stick } from '../resources/stick';

class StickCreator extends Producer {
  constructor(tickInterval) {
    super();
    this.tickInterval = tickInterval;
  }

  onTick() {
    stick.increment();
  }
}

export const manualStick = new StickCreator(5);
