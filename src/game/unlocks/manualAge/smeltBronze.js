import { Unlock } from 'manugo';
import { stick, processedStone, bronzeOre, bronzeIngot } from 'game/resources';
import { smeltBronze } from 'game/producers/manual';

const onUnlock = () => {
  bronzeIngot.unlock();

  smeltBronze.unlock();
}

export const canSmeltBronze = new Unlock('Smelt Bronze')
  .setDescription('Smelts your new compressed ore into a usable ingot.')
  .setCost(processedStone, 40)
  .setCost(stick, 60)
  .makeVisibleWhen(bronzeOre, 5)
  .execute(onUnlock);
