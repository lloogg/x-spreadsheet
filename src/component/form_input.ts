import { h } from './element';
import { cssPrefix } from '../config';
import { Element } from './element';
export default class FormInput {
  vchange: (evt?) => void;
  el: Element<"div">;
  input: Element<"input">;
  constructor(width, hint) {
    this.vchange = () => {};
    this.el = h('div', `${cssPrefix}-form-input`);
    this.input = h('input', '').css('width', width)
      .on('input', evt => this.vchange(evt))
      .attr('placeholder', hint);
    this.el.child(this.input);
  }

  focus() {
    setTimeout(() => {
      this.input.el.focus();
    }, 10);
  }

  hint(v) {
    this.input.attr('placeholder', v);
  }

  val(v) {
    return this.input.val(v);
  }
}
