import { Unlock } from 'manugo';
import { log, bronzeIngot, copperWire, tinWire } from 'game/resources';
import { woodcutter } from 'game/producers/gatherers';

const onUnlock = () => {
  log.unlock();

  woodcutter.unlock();
}

export const getWoodcutter = new Unlock('Woodcutter')
  .setDescription('Your first automatic machine! This will get you logs, which you will then need to process down into sticks.')
  .setCost(bronzeIngot, 20)
  .setCost(copperWire, 10)
  .setCost(tinWire, 5)
  .makeVisibleWhen(bronzeIngot, 20)
  .execute(onUnlock);
