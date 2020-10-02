import { Unlock } from 'manugo';
import { stoneGear, bronzeIngot, woodenGear, copperWire, tinWire } from 'game/resources';
import { stickCollector } from 'game/producers/gatherers';

const onUnlock = () => {
  copperWire.unlock();
  tinWire.activate();
}

export const basicElectricity = new Unlock('Basic Electricity')
  .setDescription('A step toward automating all this busy work.')
  .setCost(stoneGear, 5)
  .setCost(woodenGear, 5)
  .setCost(bronzeIngot, 5)
  .makeVisibleWhen(bronzeIngot, 20)
  .execute(onUnlock);
