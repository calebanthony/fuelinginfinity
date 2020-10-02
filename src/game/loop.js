import { Loop } from 'manugo';
import * as unlocks from './unlocks';
import * as triggers from './triggers';
import * as manualProducers from './producers/manual';
import * as gatherers from './producers/gatherers';
import * as resources from './resources';

import { tickDuration } from './config';

(new Loop(tickDuration))
  .load({ ...manualProducers, ...gatherers, ...resources, ...triggers, ...unlocks })
  .withTickMethods({ ...manualProducers, ...gatherers })
  .start();
