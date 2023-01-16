import { h } from './element';
import Suggest from './suggest';
import { cssPrefix } from '../config';
import { Element } from './element';
export default class FormSelect {
  key: any;
  getTitle: (it: any) => any;
  vchange: (key?) => void;
  el: Element<'div'>;
  suggest: Suggest;
  itemEl: Element<'div'>;
  constructor(key, items, width, getTitle = (it) => it, change = (key?) => {}) {
    this.key = key;
    this.getTitle = getTitle;
    this.vchange = () => {};
    this.el = h('div', `${cssPrefix}-form-select`);
    this.suggest = new Suggest(
      items.map((it) => {
        return { key: it, title: this.getTitle(it) };
      }),
      (it) => {
        this.itemClick(it.key);
        change(it.key);
        this.vchange(it.key);
      },
      width,
    );
    this.el
      .children(
        (this.itemEl = h('div', 'input-text').html(this.getTitle(key))),
        this.suggest.el,
      )
      .on('click', () => this.show());
  }

  show() {
    this.suggest.search('');
  }

  itemClick(it) {
    this.key = it;
    this.itemEl.html(this.getTitle(it));
  }

  val(v) {
    if (v !== undefined) {
      this.key = v;
      this.itemEl.html(this.getTitle(v));
      return this;
    }
    return this.key;
  }
}
