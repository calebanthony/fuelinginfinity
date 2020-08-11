import { Loop } from 'manugo';
import { unlocks } from './unlocks';
import { triggers } from './triggers';
import { producers } from './producers';
import { resources } from './resources';

(new Loop())
  .load({ ...producers, ...resources, ...triggers, ...unlocks })
  .withTickMethods({ ...producers })
  .start();
