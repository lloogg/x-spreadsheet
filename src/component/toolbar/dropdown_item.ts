import Dropdown from '../dropdown';
import Item from './item';

export class DropdownItem extends Item {
  dd: Dropdown;
  getValue(v) {
    return v;
  }

  setState(v) {
    if (v) {
      // this.value = v;
      this.dd.setTitle(v);
    }
  }
}
