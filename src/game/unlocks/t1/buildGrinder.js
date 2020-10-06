import { Unlock } from 'manugo';
import { ironPlate, ironRod, ironDust, bronzeIngot, tinWire } from 'game/resources';
import { grinder } from 'game/producers/processors';

const onUnlock = () => {
  grinder.unlock();
}

export const buildGrinder = new Unlock('Build Grinder')
  .setDescription('A bulky machine good at smashing rough stone.')
  .setCost(ironRod, 8)
  .setCost(ironPlate, 5)
  .setCost(bronzeIngot, 15)
  .setCost(tinWire, 20)
  .makeVisibleWhen(ironDust, 1)
  .execute(onUnlock);
