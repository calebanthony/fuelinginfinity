import { Unlock } from 'manugo';
import { bronzeIngot, copperWire, tinWire, energy } from 'game/resources';
import { baseGenerator } from 'game/producers/generators';

const onUnlock = () => {
  energy.unlock();
  baseGenerator.unlock();
}

export const firstGenerator = new Unlock('First Generator')
  .setDescription('All this manual work is lame. Build a generator to start creating energy, which will fuel your automatic machines.')
  .setCost(bronzeIngot, 10)
  .setCost(copperWire, 20)
  .setCost(tinWire, 30)
  .makeVisibleWhen(bronzeIngot, 20)
  .execute(onUnlock);
