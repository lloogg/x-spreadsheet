import { DropdownItem } from './dropdown_item';
import DropdownColor from '../dropdown_color';

export default class FillColor extends DropdownItem {
  constructor(color) {
    super('bgcolor', undefined, color);
    this.dd = new DropdownColor(this.tag, color);
    this.dd.change = (it) => this.change(this.tag, this.getValue(it));
    this.el.child(this.dd);
  }
}
