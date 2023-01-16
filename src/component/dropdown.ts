import { Element, h } from './element';
import { bindClickoutside, unbindClickoutside } from './event';
import { cssPrefix } from '../config';
import { DropdownItem } from './toolbar/dropdown_item';

export default class Dropdown extends Element<'div'> {
  title: any;
  headerClick: () => void;
  contentEl: any;
  headerEl: any;
  change: (it: any) => void;
  constructor(title, width, showArrow, placement, ...children) {
    super('div', `${cssPrefix}-dropdown ${placement}`);
    this.title = title;
    // this.change = () => {};
    this.headerClick = () => {};
    if (typeof title === 'string') {
      this.title = h('div', `${cssPrefix}-dropdown-title`).child(title);
    } else if (showArrow) {
      this.title.addClass('arrow-left');
    }
    this.contentEl = h('div', `${cssPrefix}-dropdown-content`)
      .css('width', width)
      .hide();

    this.setContentChildren(...children);

    this.headerEl = h('div', `${cssPrefix}-dropdown-header`);
    this.headerEl
      .on('click', () => {
        if (this.contentEl.css('display') !== 'block') {
          this.show();
        } else {
          this.hide();
        }
      })
      .children(
        this.title,
        showArrow
          ? h('div', `${cssPrefix}-icon arrow-right`).child(
              h('div', `${cssPrefix}-icon-img arrow-down`),
            )
          : '',
      );
    this.children(this.headerEl, this.contentEl);
  }
  setContentChildren(...children) {
    this.contentEl.html('');
    if (children.length > 0) {
      this.contentEl.children(...children);
    }
  }

  setTitle(title) {
    this.title.html(title);
    this.hide();
  }

  show() {
    const { contentEl } = this;
    contentEl.show();
    // this.parent().active();
    bindClickoutside(this.parent(), () => {
      this.hide();
    });
    return this;
  }
  parent() {
    return this;
  }

  hide() {
    this.parent().active(false);
    this.contentEl.hide();
    unbindClickoutside(this.parent());
    return this;
  }
}
