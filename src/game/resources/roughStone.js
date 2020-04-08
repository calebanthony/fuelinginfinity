import { Resource } from 'manugo';

class RoughStone extends Resource {
  constructor(name) {
    super(name);
  }
}

export const roughStone = new RoughStone('Rough Stone').setIcon('snowplow');
