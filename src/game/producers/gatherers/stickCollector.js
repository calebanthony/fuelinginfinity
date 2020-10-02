import { Generator } from 'manugo';
import { stick } from 'game/resources';

class StickCollector extends Generator {
  constructor(name) {
    super(name);
    this.tickInterval = 50;
  }

  onTick() {
    stick.increment();
  }
}

export const stickCollector = new StickCollector('Woodcutter')
  .setIcon('axe')
  .setFlavor('Produces sticks.')
  .setStore('level', 1);
