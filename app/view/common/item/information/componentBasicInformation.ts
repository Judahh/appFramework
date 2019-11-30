import 'simpleutils';
import { Util } from 'basicutil';
import { Component } from '../../component/component';
import { ComponentValue } from '../../basicViewModel/componentValue';

export class ComponentBasicInformation extends ComponentValue {
  public text: string;


  constructor(tag?: string, father?: Component, sVG?: boolean, arrayType?: Array<string>, arrayBindHandlers?: Array<string>) {
    super(tag, father, sVG, ComponentBasicInformation.cleanAdd(arrayType, 'text'), arrayBindHandlers);
    let _self = this;
    _self.className = 'ComponentBasicInformation';
    this.basicViewModel.init();
  }

  public renderAfterUpdate() {
    super.renderAfterUpdate();
    if (this.isElementInnerHTMLEmpty())
      this.basicViewModel.setAttributeValue('text', this.text);
    this.cleanElementInnerHTML();
  }

  protected updateLanguage(jSON) {
    super.updateLanguage(jSON);
    let variable = this.seekVariable(this.text);
    if (variable !== undefined)
      this.basicViewModel.setAttributeValue('text', variable);
  }
}
ComponentBasicInformation.addConstructor('ComponentBasicInformation', ComponentBasicInformation);
