import { Resource } from 'manugo';

export class BaseResource extends Resource {
  constructor(name) {
    super(name);
    this.iconColor = 'grey';
    this.fuelValue = 0;
  }

  setColor(color) {
    this.iconColor = color;
    return this;
  }

  setFuel(value) {
    this.fuelValue = value;
    return this;
  }
}
