import { ManualProducer } from './manualProducer';
import { stick, woodenGear } from 'game/resources';

class CraftWoodenGear extends ManualProducer {
  constructor(name) {
    super(name);
    this.tickInterval = 50;
  }

  onTick() {
    if (stick.decrement(8)) {
      woodenGear.increment(1);
    }
  }
}

export const craftWoodenGear = new CraftWoodenGear('Craft Wooden Gear')
  .setIcon('cog')
  .setFlavor('Takes 8 sticks to make 1 wooden gear.');
