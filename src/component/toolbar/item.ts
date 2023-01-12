import { cssPrefix } from '../../config';
import { tooltip } from '../tooltip';
import { h } from '../element';
import { t } from '../../locale/locale';
import { Element } from '../element';
export default class Item {
  tip: string;
  tag: any;
  shortcut: any;
  // value: any;
  el: Element<'div'>;
  change: (...args) => void;
  // tooltip
  // tag: the subclass type
  // shortcut: shortcut key
  constructor(tag?, shortcut?, value?) {
    this.tip = '';
    if (tag) {
      this.tip = t(
        `toolbar.${tag.replace(/-[a-z]/g, (c) => c[1].toUpperCase())}`,
      );
    }
    if (shortcut) {
      this.tip += ` (${shortcut})`;
    }
    this.tag = tag;
    this.shortcut = shortcut;
    // this.value = value;
    this.el = this.element();
    this.change = () => {};
  }

  element() {
    const { tip } = this;
    return h('div', `${cssPrefix}-toolbar-btn`)
      .on('mouseenter', (evt) => {
        if (this.tip) tooltip(this.tip, evt.target);
      })
      .attr('data-tooltip', tip);
  }

  setState(...args) {}
}
