import { Component } from './../../component/component';
import * as $ from 'jquery';
import { KeyboardOptions, Typing, Extender } from 'virtual-keyboard';

try { require('./componentKeyboard.css'); } catch (e) { };

export class ComponentKeyboard extends Component {
  private keyboardOptions;
  private typing;
  private extender;

  constructor(sVG?: boolean, arrayType?: string[]) {
    super('virtualKeyboard', sVG, arrayType);
    this.className = 'ComponentKeyboard';
    let keyboardOptionsB = KeyboardOptions;
  }

  public beforeUpdateLanguage() {
    let _self = this;
    let element = <any>$('#' + (<Component> this.father).getElement().id);
    element.keyboard(_self.keyboardOptions);
  }
}
ComponentKeyboard.addConstructor('ComponentKeyboard', ComponentKeyboard);
