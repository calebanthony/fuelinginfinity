import { ManualProducer } from '../manualProducer';
import { roughStone } from 'game/resources';

class RoughStoneProducer extends ManualProducer {
  constructor(name) {
    super(name);
    this.tickInterval = 25;
  }

  onTick() {
    roughStone.increment();
  }
}

export const roughStoneProducer = new RoughStoneProducer('Dig Rough Stone').setIcon('snowplow');
