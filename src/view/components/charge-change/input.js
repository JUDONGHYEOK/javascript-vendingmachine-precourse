import { ID, HINT } from '../../../constant/attributes.js';
import { createElement, createInput } from '../../../utils/dom-utils.js';
import { CHARGE } from '../../../constant/text.js';

export default class ChangeInput {
  constructor(updateChange) {
    this.$container = createElement('div');
    this.updateChage = updateChange;
    this.create();
    this.appendChildren();
  }

  create() {
    this.$title = createElement('h2', CHARGE.TITLE);
    this.$form = createElement('form', null, ID.PRODUCT.INPUT_FORM);
    this.$changeInput = createInput(ID.VENDING_MACHINE.CHARGE.INPUT, HINT.CHANGE, 'number');
    this.$submitButton = createElement('button', CHARGE.BUTTON, ID.VENDING_MACHINE.CHARGE.BUTTON);
    this.$submitButton.type = 'submit';
    this.$holdingContainer = createElement('div', CHARGE.HODLING);
    this.$holdingSpan = createElement('span', this.holdingAmount, ID.VENDING_MACHINE.CHARGE.AMOUNT);
  }

  appendChildren() {
    this.$holdingContainer.append(this.$holdingSpan);
    this.$form.append(this.$changeInput, this.$submitButton);
    this.$container.append(this.$title, this.$form, this.$holdingContainer);
  }

  chargeMoney(money) {
    this.$holdingSpan = createElement('span', money);
    this.$holdingContainer.replaceChild(this.$holdingSpan, this.$holdingContainer.lastElementChild);
    this.$container.replaceChild(this.$holdingContainer, this.$container.lastElementChild);
  }

  get component() {
    return this.$container;
  }
}
