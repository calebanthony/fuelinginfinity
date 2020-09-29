import { BaseProducer } from 'game/producers/baseProducer';
import { roughStone } from 'game/resources/roughStone';

class RoughStoneProducer extends BaseProducer {
  constructor(name) {
    super(name);
    this.tickInterval = 25;
  }

  onTick() {
    roughStone.increment(1);
  }
}

export const roughStoneProducer = new RoughStoneProducer('Dig Rough Stone').setIcon('snowplow');
