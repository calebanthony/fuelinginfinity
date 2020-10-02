import { Unlock } from 'manugo';
import { stick, roughStone, processedStone } from 'game/resources';
import { roughStoneGrinder } from 'game/producers/manual';

const onUnlock = () => {
  processedStone.unlock();
  roughStoneGrinder.unlock();
}

export const grindRoughStones = new Unlock('Grind Rough Stones')
  .setDescription('Unlocks the ability to grind rough stones into processed stone.')
  .setCost(roughStone, 20)
  .setCost(stick, 40)
  .makeVisibleWhen(roughStone, 10)
  .execute(onUnlock);
