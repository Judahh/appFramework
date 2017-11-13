import { Component } from './../../component/component';
// import * as $ from 'jquery';
// import { Util } from './../../../util/util';
// import { KeyboardOptions, Typing, Extender } from 'virtual-keyboard';
try { require('./componentKeyboard.css'); } catch (e) { };

export class ComponentKeyboard extends Component {
  private keyboardOptions;
  private typing;
  private extender;

  constructor(father?: Component, tag?) {
    super(father, 'virtualKeyboard');
    // let keyboardOptionsB = KeyboardOptions;
    // let typingB = Typing;
    // let extenderB = Extender;
  }

  public renderAfterUpdateJSON() {
    let _self = this;
    let element;// = <any>$('#' + this.element.id);
    // let jQueryB = $;
    // eval('$ = jQueryB');
    let id='#'+this.element.id;
    console.log('ID:'+id)
    console.log('_self.keyboardOptions:',_self.keyboardOptions)
    console.log('_self.typing:',_self.typing)
    console.log('_self.extender:',_self.extender)
    eval('element = $(id);');
    element.keyboard(_self.keyboardOptions);
    // .addTyping(_self.typing)
    // .addExtender(_self.extender);
  }
}