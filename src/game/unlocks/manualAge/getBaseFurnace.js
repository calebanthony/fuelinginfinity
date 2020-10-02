import { Unlock } from 'manugo';
import { stoneGear, processedStone, bronzeOre } from 'game/resources';
import { baseFurnace } from 'game/producers/processors';

const onUnlock = () => {
  baseFurnace.unlock();
}

export const getBaseFurnace = new Unlock('Get Base Furnace')
  .setDescription('Lets you smelt raw materials into usable materials.')
  .setCost(processedStone, 50)
  .setCost(stoneGear, 50)
  .makeVisibleWhen(bronzeOre, 5)
  .execute(onUnlock);
