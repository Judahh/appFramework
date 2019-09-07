import 'simpleutils';
import { Component } from './../../../component/component';
import { ComponentBasicInformation } from '../../../item/information/componentBasicInformation';

export class ComponentOption extends ComponentBasicInformation {

  constructor(father?: Component) {
    super('option', father);
    this.className = 'ComponentOption';
  }

}
ComponentOption.addConstructor('ComponentOption', ComponentOption);
