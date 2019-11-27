import 'simpleutils';
import { Util } from 'basicutil';
import { Component } from '../../component/component';
import { ComponentKeyboard } from '../keyboard/componentKeyboard';
import { ComponentBasicInformation } from '../../item/information/componentBasicInformation';

export class ComponentBasicText extends ComponentBasicInformation {
  public arrayKeyboard: Array<ComponentKeyboard>;
  public placeholder: string;

  constructor(tag?: string, father?: Component, sVG?: boolean) {
    super(tag, father, sVG);
    let _self = this;
    _self.className = 'ComponentBasicText';
    _self.arrayKeyboard = new Array<ComponentKeyboard>();
    _self.arrayKeyboard.type = ComponentKeyboard;
  }

  public renderAfterUpdate() {
    super.renderAfterUpdate();
    if (this.isElementInnerHTMLEmpty()) {
      (<HTMLInputElement>this.element).placeholder = this.placeholder;
    }
    this.cleanElementInnerHTML();
  }

  protected updateLanguage(jSON) {
    super.updateLanguage(jSON);
    let variable = this.seekVariable(this.placeholder);
    if (variable !== undefined) {
      (<HTMLInputElement>this.element).placeholder = variable;
    }
  }
}
ComponentBasicText.addConstructor('ComponentBasicText', ComponentBasicText);
