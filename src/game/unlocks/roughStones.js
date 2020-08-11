import { Unlock } from 'manugo';
import { stick } from '../resources/stick';
import { roughStone } from '../resources/roughStone';
import { roughStoneProducer } from '../producers/roughStoneProducer';

const onUnlock = () => {
  roughStone.unlock();
  roughStoneProducer.unlock();
}

export const unlockRoughStones = new Unlock('Rough Stones')
  .setDescription('Unlocks the ability to collect rough stones.')
  .setCost(stick, 40)
  .execute(onUnlock);
