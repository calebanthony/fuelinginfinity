import { Unlock } from 'manugo';
import { stick, processedStone, tinDust, copperDust } from 'game/resources';
import { processedStoneSifter } from 'game/producers/manual';

const onUnlock = () => {
  tinDust.unlock();
  copperDust.unlock();

  processedStoneSifter.unlock();
}

export const siftProcessedStone = new Unlock('Sift Processed Stone')
  .setDescription('Sift processed stones to find valuable dusts.')
  .setCost(processedStone, 40)
  .setCost(stick, 60)
  .makeVisibleWhen(processedStone, 20)
  .execute(onUnlock);
