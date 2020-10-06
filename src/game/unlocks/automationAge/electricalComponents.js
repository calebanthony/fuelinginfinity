import { Unlock } from 'manugo';
import {
  stoneGear, bronzeIngot, woodenGear, copperWire, tinWire,
  copperDust, copperOre, tinDust, tinOre, copperIngot,
  tinIngot,
} from 'game/resources';
import { wireCrafter } from 'game/producers/manual';

const onUnlock = () => {
  wireCrafter.unlock();

  copperDust.unlock();
  copperOre.unlock();
  copperIngot.unlock();
  copperWire.unlock();
  tinDust.unlock();
  tinOre.unlock();
  tinIngot.unlock();
  tinWire.unlock();
}

export const electricalComponents = new Unlock('Electrical Components')
  .setDescription('A step toward automating all this busy work. Make a few wires for the next unlock.')
  .setCost(stoneGear, 5)
  .setCost(woodenGear, 5)
  .setCost(bronzeIngot, 10)
  .makeVisibleWhen(bronzeIngot, 20)
  .execute(onUnlock);
