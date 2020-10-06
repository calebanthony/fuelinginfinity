import { Unlock } from 'manugo';
import { charcoal, stoneGear, woodenGear, copperWire, ironIngot, ironPlate, ironOre, ironRod, ironDust } from 'game/resources';

const onUnlock = () => {
  ironDust.unlock();
  ironOre.unlock();
  ironIngot.unlock();
  ironPlate.unlock();
  ironRod.unlock();
}

export const getIron = new Unlock('Iron')
  .setDescription('The next level of automation requires some more sturdy material.')
  .setCost(stoneGear, 20)
  .setCost(woodenGear, 15)
  .setCost(copperWire, 10)
  .makeVisibleWhen(charcoal, 1)
  .execute(onUnlock);
