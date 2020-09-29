import { Generator } from 'manugo';

let allProducers = null;

import('./index.js').then((manualProducers) => {
  allProducers = manualProducers;
});

export class ManualProducer extends Generator {
  onActivate() {
    Object.values(allProducers).forEach(producer => producer.deactivate());
  }
}
