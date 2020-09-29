import { Unlock } from 'manugo';
import { stick } from 'game/resources';
import { roughStone } from 'game/resources';
import { roughStoneProducer } from 'game/producers/manual';

const onUnlock = () => {
  roughStone.unlock();
  roughStoneProducer.unlock();
}

export const unlockRoughStones = new Unlock('Rough Stones')
  .setDescription('Unlocks the ability to dig rough stones.')
  .setCost(stick, 40)
  .makeVisibleWhen(stick, 10)
  .execute(onUnlock);
