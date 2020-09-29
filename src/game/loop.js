import { Loop } from 'manugo';
import * as unlocks from './unlocks';
import * as triggers from './triggers';
import * as producers from './producers';
import * as resources from './resources';

(new Loop())
  .load({ ...producers, ...resources, ...triggers, ...unlocks })
  .withTickMethods({ ...producers })
  .start();
