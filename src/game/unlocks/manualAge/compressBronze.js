import { Unlock } from 'manugo';
import { stick, processedStone, bronzeOre, tinDust } from 'game/resources';
import { manualCompressor } from 'game/producers/manual';

const onUnlock = () => {
  bronzeOre.unlock();

  manualCompressor.unlock();
}

export const canCompressBronze = new Unlock('Compress Bronze')
  .setDescription('Smelts your new compressed dusts into ores.')
  .setCost(processedStone, 40)
  .setCost(stick, 50)
  .makeVisibleWhen(tinDust, 5)
  .execute(onUnlock);
