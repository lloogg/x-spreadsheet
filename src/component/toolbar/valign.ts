import { DropdownItem } from './dropdown_item';
import DropdownAlign from '../dropdown_align';

export default class Valign extends DropdownItem {
  constructor(value) {
    super('valign', '', value);
    this.dd = new DropdownAlign(['top', 'middle', 'bottom'], value);
    this.dd.change = (it) => this.change(this.tag, this.getValue(it));
    this.el.child(this.dd);
  }
}
