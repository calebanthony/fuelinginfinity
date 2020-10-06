import { Generator } from 'manugo';
import { energy, stick, log } from 'game/resources';

class BaseGenerator extends Generator {
  constructor(name) {
    super(name);
    this.tickInterval = 20;

    this.fuels = {
      [log.name]: log,
      [stick.name]: stick,
    };
  }

  onTick() {
    const fuel = this.fuels[this.dependencies.self.fuel];

    if (fuel.decrement()) {
      energy.increment(fuel.fuelValue / 2);
    }
  }

  changeFuel(fuel) {
    this.setStore('fuel', fuel);
  }
}

export const baseGenerator = new BaseGenerator('Basic Generator')
  .setIcon('heat')
  .setFlavor('Generates energy for you.')
  .setStore('fuel', 'Stick');
