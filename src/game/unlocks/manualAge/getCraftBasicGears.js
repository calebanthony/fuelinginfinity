import { Unlock } from 'manugo';
import { roughStone, woodenGear, stoneGear } from 'game/resources';
import { gearCrafter } from 'game/producers/manual/crafter';

const onUnlock = () => {
  woodenGear.unlock();
  stoneGear.unlock();

  gearCrafter.unlock();
}

export const getCraftBasicGears = new Unlock('Craft Basic Gears')
  .setDescription('Can turn resources into basic gears, useful for all kinds of machinery.')
  .setCost(roughStone, 20)
  .makeVisibleWhen(roughStone, 10)
  .execute(onUnlock);
