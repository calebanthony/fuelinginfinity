import { ManualProducer } from '../manualProducer';
import { processedStone, tinDust, copperDust, ironDust } from 'game/resources';

class ProcessedStoneSifter extends ManualProducer {
  constructor(name) {
    super(name);
    this.tickInterval = 30;

    this.dependencies = {
      [ironDust.name]: ironDust,
    };
  }

  onTick() {
    if (processedStone.decrement()) {      
      // Gets a random number from 0 to 100.
      const randomNumber = Math.floor(Math.random() * Math.floor(100));

      if (this.dependencies[ironDust.name].unlocked) {
        if (randomNumber < 30) {
          tinDust.increment();
        }
        if (randomNumber >= 30 && randomNumber < 60) {
          copperDust.increment();
        }
        if (randomNumber >= 60 && randomNumber < 90) {
          ironDust.increment();
        }
      } else {
        if (randomNumber < 40) {
          tinDust.increment();
        }
        if (randomNumber >= 40 && randomNumber < 80) {
          copperDust.increment();
        }
      }
    }
  }
}

export const processedStoneSifter = new ProcessedStoneSifter('Sift Processed Stones')
  .setIcon('filter')
  .setFlavor('Uses 1 Processed Stone for a chance at a dust.');
