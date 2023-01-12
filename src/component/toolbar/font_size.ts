import { DropdownItem } from './dropdown_item';
import DropdownFontsize from '../dropdown_fontsize';

export default class Format extends DropdownItem {
  constructor() {
    super('font-size');
    this.dd = new DropdownFontsize();
    this.dd.change = (it) => this.change(this.tag, this.getValue(it));
    this.el.child(this.dd);
  }

  getValue(it) {
    return it.pt;
  }
}
