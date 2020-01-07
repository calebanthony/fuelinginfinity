import { Trigger } from 'manugo';
import { stick } from '../resources/stick';

const onUnlock = () => {
    stick.decrement(40);
};

export const unlockRoughStones = new Trigger().setCost(40).execute(onUnlock);
