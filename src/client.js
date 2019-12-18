import * as sapper from '@sapper/app';
import { Loop } from 'manugo';
import { manual } from './producers/manual';
import { load } from './logic/state';

sapper.start({
  target: document.querySelector('#sapper')
});

load();
(new Loop()).with({ manual }).start();
