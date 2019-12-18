import * as sapper from '@sapper/app';
import './game/loop';

sapper.start({
  target: document.querySelector('#sapper')
});
