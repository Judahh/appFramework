import 'simpleutils';
import { Util } from 'basicutil';
import { Component } from '../../component/component';
import { ComponentKeyboard } from '../keyboard/componentKeyboard';
import { ComponentBasicInformation } from '../../information/componentBasicInformation';
import { Attribute } from '../../basicViewModel/attribute';

export class ComponentBasicText extends ComponentBasicInformation {
  public arrayKeyboard: Array<ComponentKeyboard>;
  public placeholder: string;

  constructor(tag?: string, sVG?: boolean, arrayType?: Array<string>, arrayBindHandlers?: Array<string>) {
    super(tag, sVG, ComponentBasicText.cleanAdd(arrayType, 'placeholder'), ComponentBasicText.cleanAdd(arrayBindHandlers, 'placeholder'));
    let _self = this;
    _self.className = 'ComponentBasicText';
    _self.arrayKeyboard = new Array<ComponentKeyboard>();
    _self.arrayKeyboard.type = ComponentKeyboard;
  }

  public beforeUpdateLanguage() {
    if (this.isElementInnerHTMLEmpty())
      this.basicViewModel.setAttributeValue('placeholder', this.placeholder);
    this.cleanElementInnerHTML();
  }

  protected afterUpdateLanguage() {
    let variable = this.seekVariable(this.placeholder);
    if (variable !== undefined)
      this.basicViewModel.setAttributeValue('placeholder', variable);
  }
}
ComponentBasicText.addConstructor('ComponentBasicText', ComponentBasicText);
