import 'simpleutils';
import { Component } from '../../../component/component';
import { ComponentBasicText } from '../componentBasicText';

export class ComponentTextArea extends ComponentBasicText {

  constructor() {
    super('textarea');
    this.className = 'ComponentTextArea';
  }
}
ComponentTextArea.addConstructor('ComponentTextArea', ComponentTextArea);
