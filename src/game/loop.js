import { Loop } from 'manugo';
import { producers } from './producers';
import { resources } from './resources';
import { triggers } from './triggers';

(new Loop())
  .load({ ...producers, ...resources, ...triggers })
  .with({ ...producers })
  .start();
