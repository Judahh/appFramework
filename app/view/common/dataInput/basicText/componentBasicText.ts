import 'simpleutils';
import { Util } from 'basicutil';
import { Component } from '../../component/component';
import { ComponentKeyboard } from '../keyboard/componentKeyboard';
import { ComponentBasicInformation } from '../../item/information/componentBasicInformation';
import { Attribute } from '../../basicViewModel/attribute';

export class ComponentBasicText extends ComponentBasicInformation {
  public arrayKeyboard: Array<ComponentKeyboard>;
  public placeholder: string;

  constructor(tag?: string, father?: Component, sVG?: boolean) {
    super(tag, father, sVG);
    let _self = this;
    let type = 'placeholder';
    let attribute = new Attribute(type, type + this.element.id);
    this.basicViewModel.addBindHandler(type);
    this.basicViewModel.addBind(attribute);
    this.basicViewModel.init();
    _self.className = 'ComponentBasicText';
    _self.arrayKeyboard = new Array<ComponentKeyboard>();
    _self.arrayKeyboard.type = ComponentKeyboard;
  }

  public renderAfterUpdate() {
    super.renderAfterUpdate();
    if (this.isElementInnerHTMLEmpty()) {
      this.basicViewModel.setAttributeValue('placeholder', this.placeholder);
      // (<HTMLInputElement>this.element).placeholder = this.placeholder;
    }
    this.cleanElementInnerHTML();
  }

  protected updateLanguage(jSON) {
    super.updateLanguage(jSON);
    let variable = this.seekVariable(this.placeholder);
    if (variable !== undefined) {
      this.basicViewModel.setAttributeValue('placeholder', variable);
      // (<HTMLInputElement>this.element).placeholder = variable;
    }
  }
}
ComponentBasicText.addConstructor('ComponentBasicText', ComponentBasicText);
