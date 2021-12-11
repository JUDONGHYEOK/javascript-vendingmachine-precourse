import { CURRENCY } from '../constant/constant.js';

export default class Coin {
  constructor(kinds, amount) {
    this.kinds = kinds;
    this.amount = amount;
  }

  get obj() {
    const key = `${String(this.kinds)}${CURRENCY}`;
    return { [key]: this.amount };
  }
}