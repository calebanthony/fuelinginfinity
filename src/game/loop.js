import { Loop } from 'manugo';
import * as unlocks from './unlocks';
import * as triggers from './triggers';
import * as manualProducers from './producers/manual';
import * as resources from './resources';

(new Loop(5))
  .load({ ...manualProducers, ...resources, ...triggers, ...unlocks })
  .withTickMethods({ ...manualProducers })
  .start();
