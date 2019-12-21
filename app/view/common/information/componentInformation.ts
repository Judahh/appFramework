import 'simpleutils';
import { Component } from '../component/component';
import { ComponentGeneric } from '../component/generic/componentGeneric';

export class ComponentInformation extends ComponentGeneric {
  item: any; // ComponentItem

  constructor() {
    super('ComponentBasicInformation', 'a');
    this.className = 'ComponentInformation';
    this.getItem();
    // this.item=new ComponentItem(this.element);
  }

  private getItem() {
    this.item = <Component/*ComponentItem*/>this.seekFather('ComponentItem');
  }

}
ComponentInformation.addConstructor('ComponentInformation', ComponentInformation);
