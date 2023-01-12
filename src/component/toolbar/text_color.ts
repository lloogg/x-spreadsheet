import { DropdownItem } from './dropdown_item';
import DropdownColor from '../dropdown_color';

export default class TextColor extends DropdownItem {
  constructor(color) {
    super('color', undefined, color);
    this.dd = new DropdownColor(this.tag, color);
    this.dd.change = (it) => this.change(this.tag, this.getValue(it));
    this.el.child(this.dd);
  }
}
