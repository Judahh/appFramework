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
  }

  public renderAfterUpdate() {
    super.renderAfterUpdate();
    if (this.isElementInnerHTMLEmpty()) {
      this.element.innerHTML = this.text;
    }
    this.cleanElementInnerHTML();
  }

  protected updateLanguage(jSON) {
    let variable = this.seekVariable(this.text);
    super.updateLanguage(jSON);
    this.element.innerHTML = variable.toString();
  }
}
ComponentBasicInformation.addConstructor('ComponentBasicInformation', ComponentBasicInformation);
