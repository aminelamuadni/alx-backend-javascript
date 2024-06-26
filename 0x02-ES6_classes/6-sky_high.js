import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor for sqft
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
