import { Unlock } from 'manugo';
import { ironPlate, ironGear, ironRod, ironDust, copperWire, bronzeIngot, tinWire } from 'game/resources';
import { excavator } from 'game/producers/gatherers';

const onUnlock = () => {
  excavator.unlock();
}

export const buildExcavator = new Unlock('Build Excavator')
  .setDescription('A bulky machine good at smashing rough stone.')
  .setCost(ironRod, 15)
  .setCost(ironPlate, 7)
  .setCost(ironGear, 5)
  .setCost(bronzeIngot, 20)
  .setCost(tinWire, 10)
  .setCost(copperWire, 10)
  .makeVisibleWhen(ironDust, 1)
  .execute(onUnlock);
