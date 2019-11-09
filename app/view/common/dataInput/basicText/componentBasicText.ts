import 'simpleutils';
import { Util } from 'basicutil';
import { Component } from '../../component/component';
import { ComponentKeyboard } from '../keyboard/componentKeyboard';
import { ComponentBasicInformation } from '../../item/information/componentBasicInformation';

export class ComponentBasicText extends ComponentBasicInformation {
  arrayKeyboard: Array<ComponentKeyboard>;

  constructor(tag?: string, father?: Component, sVG?: boolean) {
    super(tag, father, sVG);
    let _self = this;
    _self.className = 'ComponentBasicText';
    _self.arrayKeyboard = new Array<ComponentKeyboard>();
    _self.arrayKeyboard.type = ComponentKeyboard;
  }

  public renderAfterUpdate() {
    super.renderAfterUpdate();
    // if (!(<HTMLInputElement>this.element).placeholder) {
    //   (<HTMLInputElement>this.element).placeholder = this.information;
    // }
  }
}
ComponentBasicText.addConstructor('ComponentBasicText', ComponentBasicText);
