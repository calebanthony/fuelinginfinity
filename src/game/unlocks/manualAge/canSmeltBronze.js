import { Unlock } from 'manugo';
import { stick, processedStone, bronzeOre, bronzeIngot } from 'game/resources';

const onUnlock = () => {
  bronzeIngot.unlock();
}

export const canSmeltBronze = new Unlock('Smelt Bronze')
  .setDescription('Smelts your new compressed ore into a usable ingot.')
  .setCost(processedStone, 10)
  .setCost(stick, 20)
  .makeVisibleWhen(bronzeOre, 5)
  .execute(onUnlock);
