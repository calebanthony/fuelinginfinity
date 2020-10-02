import { Resource } from 'manugo';

class Stick extends Resource {
  constructor(name) {
    super(name);
    this.fuelValue = 2;
  }
}

export const stick = (new Stick('Stick')).setIcon('staff').unlock();
