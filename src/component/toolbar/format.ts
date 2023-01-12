import { DropdownItem } from './dropdown_item';
import DropdownFormat from '../dropdown_format';

export default class Format extends DropdownItem {
  constructor() {
    super('format');
    this.dd = new DropdownFormat();
    this.dd.change = (it) => this.change(this.tag, this.getValue(it));
    this.el.child(this.dd);
  }

  getValue(it) {
    return it.key;
  }
}
