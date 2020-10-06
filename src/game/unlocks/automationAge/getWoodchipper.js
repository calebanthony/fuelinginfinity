import { Unlock } from 'manugo';
import { log, bronzeIngot, copperWire, tinWire } from 'game/resources';
import { woodchipper } from 'game/producers/processors';

const onUnlock = () => {
  woodchipper.unlock();
}

export const getWoodchipper = new Unlock('Woodchipper')
  .setDescription('Breaks down logs into sticks.')
  .setCost(bronzeIngot, 35)
  .setCost(copperWire, 15)
  .setCost(tinWire, 15)
  .makeVisibleWhen(log, 10)
  .execute(onUnlock);
