import 'simpleutils';
import { Util } from 'basicutil';
import { Component } from './../../component/component';
import { ComponentBasicInformation } from '../../item/information/componentBasicInformation';

export class ComponentText extends ComponentBasicInformation {
  constructor(father?: Component) {
    super('text', father, true);
    this.className = 'ComponentText';
  }
}
ComponentText.addConstructor('ComponentText', ComponentText);
