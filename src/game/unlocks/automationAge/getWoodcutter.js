import { Unlock } from 'manugo';
import { stick, bronzeIngot } from 'game/resources';
import { woodcutter } from 'game/producers/gatherers';

const onUnlock = () => {
  woodcutter.unlock();
  woodcutter.activate();
}

export const getWoodcutter = new Unlock('Get Woodcutter')
  .setDescription('The beginning of automation! This woodcutter works very slowly to grab sticks for you.')
  .setCost(bronzeIngot, 10)
  .setCost(stick, 20)
  .makeVisibleWhen(bronzeIngot, 5)
  .execute(onUnlock);
