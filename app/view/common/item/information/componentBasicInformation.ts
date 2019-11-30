import 'simpleutils';
import { Util } from 'basicutil';
import { Component } from '../../component/component';
import { ComponentValue } from '../../basicViewModel/componentValue';

export class ComponentBasicInformation extends ComponentValue {
  public text: string;


  constructor(tag?: string, father?: Component, sVG?: boolean) {
    super(tag, father, 'text', sVG);
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
    let variable = this.seekVariable(this.text);
    super.updateLanguage(jSON);
    if (variable !== undefined)
      this.basicViewModel.setAttributeValue('text', variable);
  }
}
ComponentBasicInformation.addConstructor('ComponentBasicInformation', ComponentBasicInformation);
