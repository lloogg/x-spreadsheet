import { DropdownItem } from './dropdown_item';
import DropdownBorder from '../dropdown_border';

export default class Border extends DropdownItem {
  constructor() {
    super('border');
    this.dd = new DropdownBorder();
    this.dd.change = (it) => this.change(this.tag, this.getValue(it));
    this.el.child(this.dd);
  }
}
