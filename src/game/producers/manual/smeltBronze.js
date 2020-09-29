import { ManualProducer } from './manualProducer';
import { stick, bronzeOre, bronzeIngot } from 'game/resources';

class SmeltBronze extends ManualProducer {
  constructor(name) {
    super(name);
    this.tickInterval = 40;
    this.dependencies = { stick, bronzeOre };
  }

  onTick() {
    if (this.dependencies.stick.count >= 10 && this.dependencies.bronzeOre.count >= 1) {
      stick.decrement(10);
      bronzeOre.decrement();
      bronzeIngot.increment();
    }
  }
}

export const smeltBronze = new SmeltBronze('Smelt Bronze Ingot')
  .setIcon('fireplace')
  .setFlavor('Burn up 10 sticks and 1 bronze ore to make a bronze ingot.');
