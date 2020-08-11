import { Generator } from 'manugo';

let allProducers = null;

import('./index.js').then(({ producers }) => {
  allProducers = producers;
});

export class BaseProducer extends Generator {
  onActivate() {
    Object.values(allProducers).forEach(producer => producer.deactivate());
  }
}
