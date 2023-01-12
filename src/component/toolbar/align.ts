import { DropdownItem } from './dropdown_item';
import DropdownAlign from '../dropdown_align';

export default class Align extends DropdownItem {
  constructor(value) {
    super('align', '', value);
    this.dd = new DropdownAlign(['left', 'center', 'right'], value);
    this.dd.change = (it) => this.change(this.tag, this.getValue(it));
    this.el.child(this.dd);
  }
}
