import 'simpleutils';
import { Util } from 'basicutil';
import { Component } from './../../component/component';
import { ComponentBasicInformation } from '../../item/information/componentBasicInformation';

export class ComponentText extends ComponentBasicInformation {
  constructor(father?: Component) {
    super('text', father, true);
    this.className = 'ComponentText';
  }

  public renderAfterUpdate() {
    super.renderAfterUpdate();
    if (!this.element.innerHTML) {
      // console.log(this.text);
      this.element.innerHTML = this.text;
    }

  }
}
ComponentText.addConstructor('ComponentText', ComponentText);
