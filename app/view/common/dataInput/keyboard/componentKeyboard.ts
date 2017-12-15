import { Component } from './../../component/component';
import * as $ from 'jquery';
// import { Util } from './../../../util/util';
import { KeyboardOptions, Typing, Extender } from 'virtual-keyboard';
try { require('./componentKeyboard.css'); } catch (e) { };

export class ComponentKeyboard extends Component {
  private keyboardOptions;
  private typing;
  private extender;

  constructor(father?: Component, tag?) {
    super(father, 'virtualKeyboard');
    let keyboardOptionsB = KeyboardOptions;
  }

  public renderAfterUpdateJSON() {
    let _self = this;
    let element = <any>$('#' + this.father.getElement().id);
    element.keyboard(_self.keyboardOptions);
  }
}