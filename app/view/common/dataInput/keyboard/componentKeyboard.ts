import { Component } from './../../component/component';
// import * as $ from 'jquery';
var $ = require('jquery');
import { KeyboardOptions, Typing, Extender } from 'virtual-keyboard';
// tslint:disable-next-line:no-empty
try { require('./componentKeyboard.css'); } catch (e) { };

export class ComponentKeyboard extends Component {
  private keyboardOptions;
  private typing;
  private extender;

  constructor(father?: Component) {
    super('virtualKeyboard', father);
    this.className = 'ComponentKeyboard';
    let keyboardOptionsB = KeyboardOptions;
  }

  public renderAfterUpdateJSON() {
    let _self = this;
    let element = <any>$('#' + this.father.getElement().id);
    element.keyboard(_self.keyboardOptions);
  }
}
ComponentKeyboard.addConstructor('ComponentKeyboard', ComponentKeyboard);
