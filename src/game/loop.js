import { Loop } from 'manugo';
import * as unlocks from './unlocks';
import * as triggers from './triggers';
import * as manualProducers from './producers/manual';
import * as gatherers from './producers/gatherers';
import * as processors from './producers/processors';
import * as generators from './producers/generators';
import * as resources from './resources';

import { tickDuration } from './config';

(new Loop(tickDuration))
  .load({ ...manualProducers, ...gatherers, ...processors, ...generators, ...resources, ...triggers, ...unlocks })
  .withTickMethods({ ...manualProducers, ...gatherers, ...processors, ...generators })
  .start();
