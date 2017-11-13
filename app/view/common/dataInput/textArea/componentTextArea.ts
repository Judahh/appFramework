import { Component } from './../../component/component';
import { ComponentKeyboard } from './../keyboard/componentKeyboard';
try {require('./componentTextArea.css');}catch(e){};


export class ComponentTextArea extends Component {
  arrayKeyboard: Array<ComponentKeyboard>;

  constructor(father?: Component, tag?) {
    super(father, 'textarea');
    this.arrayKeyboard = new Array<ComponentKeyboard>();
    this.arrayKeyboard.type = ComponentKeyboard;
  }
}