import { Unlock } from 'manugo';
import { charcoal, stoneGear, bronzeIngot, tinWire, copperWire } from 'game/resources';
import { extruder } from 'game/producers/processors';

const onUnlock = () => {
  extruder.unlock();
}

export const buildExtruder = new Unlock('Build Extruder')
  .setDescription('Bigger machines require more complicated parts. At least I\'m pretty sure that\'s how it works...')
  .setCost(stoneGear, 20)
  .setCost(bronzeIngot, 30)
  .setCost(tinWire, 10)
  .setCost(copperWire, 10)
  .makeVisibleWhen(charcoal, 1)
  .execute(onUnlock);
