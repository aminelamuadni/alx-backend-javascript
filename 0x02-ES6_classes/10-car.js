const cloneCarSymbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    if (new.target === Car && this.constructor[cloneCarSymbol]) {
      return new this.constructor();
    }

    this._brand = brand;
    this._motor = motor;
    this._color = color;

    this.constructor[cloneCarSymbol] = true;
  }

  cloneCar() {
    return new this.constructor();
  }
}
