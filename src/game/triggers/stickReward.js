import { Trigger } from 'manugo';
import { stick } from '../resources/stick';

const increaseSticks = () => {
  stick.increment(500);
}

export const stickReward = (new Trigger()).when(stick, 350).execute(increaseSticks);
