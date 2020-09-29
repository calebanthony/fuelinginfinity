import { Unlock } from 'manugo';
import { stick } from 'game/resources/stick';
import { roughStone } from 'game/resources/roughStone';
import { roughStoneProducer } from 'game/producers';

const onUnlock = () => {
  roughStone.unlock();
  roughStoneProducer.unlock();
}

export const unlockRoughStones = new Unlock('Rough Stones')
  .setDescription('Unlocks the ability to dig rough stones.')
  .setCost(stick, 40)
  .makeVisibleWhen(stick, 10)
  .execute(onUnlock);
