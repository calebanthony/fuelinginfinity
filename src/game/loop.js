import { Loop } from 'manugo';
import { manual } from './producers/manual';
import { stick } from './resources/stick';

(new Loop())
  .load({ stick, manual })
  .with({ manual })
  .start();
