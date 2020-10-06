import { Unlock } from 'manugo';
import { ironPlate, ironRod, ironDust, copperWire, bronzeIngot, tinWire } from 'game/resources';
import { sifter } from 'game/producers/processors';

const onUnlock = () => {
  sifter.unlock();
}

export const buildSifter = new Unlock('Build Sifter')
  .setDescription('A giant sifter to get valuable dusts from processed stone.')
  .setCost(ironRod, 5)
  .setCost(ironPlate, 10)
  .setCost(bronzeIngot, 10)
  .setCost(copperWire, 7)
  .setCost(tinWire, 7)
  .makeVisibleWhen(ironDust, 1)
  .execute(onUnlock);
