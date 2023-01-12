import { DropdownItem } from './dropdown_item';
import DropdownFormula from '../dropdown_formula';

export default class Format extends DropdownItem {
  constructor() {
    super('formula');
    this.dd = new DropdownFormula();
    this.dd.change = (it) => this.change(this.tag, this.getValue(it));
    this.el.child(this.dd);
  }

  getValue(it) {
    return it.key;
  }
}
