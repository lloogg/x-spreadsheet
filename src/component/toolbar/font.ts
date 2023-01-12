import { DropdownItem } from './dropdown_item';
import DropdownFont from '../dropdown_font';

export default class Font extends DropdownItem {
  constructor() {
    super('font-name');
    this.dd = new DropdownFont();
    this.dd.change = (it) => this.change(this.tag, this.getValue(it));
    this.el.child(this.dd);
  }

  getValue(it) {
    return it.key;
  }
}
