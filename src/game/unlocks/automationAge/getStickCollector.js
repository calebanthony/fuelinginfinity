import { Unlock } from 'manugo';
import { stick, bronzeIngot } from 'game/resources';
import { stickCollector } from 'game/producers/gatherers';

const onUnlock = () => {
  stickCollector.unlock();
  stickCollector.activate();
}

export const getStickCollector = new Unlock('Get Stick Collector')
  .setDescription('The beginning of automation! This Stick Collector works very slowly to grab sticks for you.')
  .setCost(bronzeIngot, 10)
  .setCost(stick, 20)
  .makeVisibleWhen(bronzeIngot, 5)
  .execute(onUnlock);
