import { ManualProducer } from './manualProducer';
import { tinDust, copperDust, bronzeOre } from 'game/resources';

class CompressBronze extends ManualProducer {
  constructor(name) {
    super(name);
    this.tickInterval = 35;
    this.dependencies = { tinDust, copperDust };
  }

  onTick() {
    // Decrements if one of them doesn't work
    if (this.dependencies.tinDust.count >= 1 && this.dependencies.copperDust.count >= 1) {
      tinDust.decrement();
      copperDust.decrement();
      bronzeOre.increment();
    }
  }
}

export const compressBronze = new CompressBronze('Compress Bronze')
  .setIcon('compress')
  .setFlavor('Takes 1 tin dust and 1 copper dust to create 1 bronze ore.');
