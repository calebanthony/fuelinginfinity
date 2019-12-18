import { Loop } from 'manugo';
import { producers } from './producers';
import { resources } from './resources';

(new Loop())
  .load({ ...producers, ...resources })
  .with({ ...producers })
  .start();
