import { Generator } from 'manugo';
import { stick } from 'game/resources';

class StickCollector extends Generator {
  constructor(name) {
    super(name);
    this.tickInterval = 60;
  }

  onTick() {
    stick.increment();
  }
}

export const stickCollector = new StickCollector('Stick Collector')
  .setIcon('staff')
  .setFlavor('Produces sticks.')
  .setStore('level', 1);
