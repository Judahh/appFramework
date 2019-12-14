import 'simpleutils';
import { Component } from '../../component/component';
import { ComponentBasicInformation } from '../componentBasicInformation';

export class ComponentOption extends ComponentBasicInformation {

  constructor() {
    super('option');
    this.className = 'ComponentOption';
  }

}
ComponentOption.addConstructor('ComponentOption', ComponentOption);
