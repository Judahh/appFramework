import 'simpleutils';
import { Component } from '../../../component/component';
import { ComponentBasicText } from '../componentBasicText';

export class ComponentTextArea extends ComponentBasicText {

  constructor(father?: Component) {
    super('textarea', father);
    this.className = 'ComponentTextArea';
  }
}
ComponentTextArea.addConstructor('ComponentTextArea', ComponentTextArea);
