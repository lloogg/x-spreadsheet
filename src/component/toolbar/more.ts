import Dropdown from '../dropdown';
import { DropdownItem } from './dropdown_item';

import { cssPrefix } from '../../config';
import { h } from '../element';
import Icon from '../icon';
import { Element } from '../element';
class DropdownMore extends Dropdown {
  moreBtns: Element<'div'>;
  constructor() {
    const icon = new Icon('ellipsis');
    const moreBtns = h('div', `${cssPrefix}-toolbar-more`);
    super(icon, 'auto', false, 'bottom-right', moreBtns);
    this.moreBtns = moreBtns;
    this.contentEl.css('max-width', '420px');
  }
}

export default class More extends DropdownItem {
  constructor() {
    super('more');
    this.dd = new DropdownMore();
    this.dd.change = (it) => this.change(this.tag, this.getValue(it));
    this.el.child(this.dd);
    this.el.hide();
  }

  show() {
    this.el.show();
  }

  hide() {
    this.el.hide();
  }
}
