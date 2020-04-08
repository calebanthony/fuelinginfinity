import { Unlock } from 'manugo';
import { stick } from '../resources/stick';
import { roughStone } from '../resources/roughStone';

const onUnlock = () => {
  roughStone.unlock();
}

export const unlockRoughStones = new Unlock('Rough Stones')
  .setDescription('Unlocks the ability to collect rough stones.')
  .setCost(stick, 40)
  .execute(onUnlock);
