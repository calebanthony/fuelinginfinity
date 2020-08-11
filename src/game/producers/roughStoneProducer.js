import { BaseProducer } from './baseProducer';
import { roughStone } from '../resources/roughStone';

class RoughStoneProducer extends BaseProducer {
  constructor(name) {
    super(name);
    this.tickInterval = 8;
  }

  onTick() {
    roughStone.increment(1);
  }
}

export const roughStoneProducer = new RoughStoneProducer('Dig Rough Stone').setIcon('snowplow');
