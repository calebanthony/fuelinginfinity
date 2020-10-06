import { Generator } from 'manugo';
import { energy, stick, log, charcoal } from 'game/resources';

class BaseGenerator extends Generator {
  constructor(name) {
    super(name);
    this.tickInterval = 20;

    this.fuels = {
      [log.name]: log,
      [stick.name]: stick,
      [charcoal.name]: charcoal,
    };

    this.potentialEnergy = 0;
  }

  onTick() {
    const fuel = this.fuels[this.dependencies.self.fuel];

    if (this.potentialEnergy === 0 && fuel.decrement()) {
      this.potentialEnergy += fuel.fuelValue / 2;
    }

    if (this.potentialEnergy > 0) {
      this.potentialEnergy -= 1;
      energy.increment();
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
