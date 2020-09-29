import { ManualProducer } from './manualProducer';
import { roughStone, processedStone } from 'game/resources';

class RoughStoneGrinder extends ManualProducer {
  constructor(name) {
    super(name);
    this.tickInterval = 30;
  }

  onTick() {
    if (roughStone.decrement()) {
      processedStone.increment();
    }
  }
}

export const roughStoneGrinder = new RoughStoneGrinder('Grind Rough Stone')
  .setIcon('mortar-pestle')
  .setFlavor('Uses up 1 Rough Stone to generate 1 Processed Stone.');
