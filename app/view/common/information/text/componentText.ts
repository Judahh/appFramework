import 'simpleutils';
import { Util } from 'basicutil';
import { Component } from '../../component/component';
import { ComponentBasicInformation } from '../componentBasicInformation';

export class ComponentText extends ComponentBasicInformation {
  constructor() {
    super('text', true);
    this.className = 'ComponentText';
  }
}
ComponentText.addConstructor('ComponentText', ComponentText);
