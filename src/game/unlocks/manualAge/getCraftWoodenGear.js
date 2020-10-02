import { Unlock } from 'manugo';
import { roughStone, woodenGear } from 'game/resources';
import { craftWoodenGear } from 'game/producers/manual';

const onUnlock = () => {
  woodenGear.unlock();
  craftWoodenGear.unlock();
}

export const getCraftWoodenGear = new Unlock('Craft Wood Gears')
  .setDescription('Can turn sticks into wooden gears, useful for all kinds of machinery.')
  .setCost(roughStone, 20)
  .makeVisibleWhen(roughStone, 10)
  .execute(onUnlock);
