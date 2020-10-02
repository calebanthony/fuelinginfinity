import { Generator } from 'manugo';
import { stick } from 'game/resources';

class Woodcutter extends Generator {
  constructor(name) {
    super(name);
    this.tickInterval = 50;
  }

  onTick() {
    stick.increment();
  }
}

export const woodcutter = new Woodcutter('Woodcutter')
  .setIcon('axe')
  .setFlavor('Produces sticks.')
  .setStore('level', 1);
