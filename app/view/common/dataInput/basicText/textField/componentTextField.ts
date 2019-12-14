import 'simpleutils';
import { Component } from '../../../component/component';
import { ComponentBasicText } from '../componentBasicText';


export class ComponentTextField extends ComponentBasicText {

  constructor() {
    super('input');
    this.className = 'ComponentTextField';
  }
}
ComponentTextField.addConstructor('ComponentTextField', ComponentTextField);
