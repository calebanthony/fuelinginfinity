import { Loop } from 'manugo';
import { producers } from './producers';
import { resources } from './resources';
import { triggers } from './triggers';
import { unlocks } from './unlocks';

(new Loop())
  .load({ ...producers, ...resources, ...triggers, ...unlocks })
  .withTickMethods({ ...producers })
  .start();
