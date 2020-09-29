import { ManualProducer } from './manualProducer';
import { processedStone, tinDust, copperDust } from 'game/resources';

class ProcessedStoneSifter extends ManualProducer {
  constructor(name) {
    super(name);
    this.tickInterval = 30;
  }

  onTick() {
    if (processedStone.decrement()) {      
      // Gets a random number from 0 to 100.
      const randomNumber = Math.floor(Math.random() * Math.floor(100));

      if (randomNumber < 40) {
        tinDust.increment();
      }

      if (randomNumber >= 40 && randomNumber < 80) {
        copperDust.increment();
      }
    }
  }
}

export const processedStoneSifter = new ProcessedStoneSifter('Sift Processed Stones')
  .setIcon('filter')
  .setFlavor('Uses 1 Processed Stone for a chance at a dust.');
