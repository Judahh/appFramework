import 'simpleutils';
import { Component } from './../../component/component';
import { ComponentBasicInformation } from './componentBasicInformation';

export class ComponentInformation extends ComponentBasicInformation {
  item: any; // ComponentItem

  constructor(father?: Component) {
    super('a', father);
    this.className = 'ComponentInformation';
    this.getItem();
    // this.item=new ComponentItem(this.element);
  }

  private getItem() {
    this.item = <Component/*ComponentItem*/>this.seekFather('ComponentItem');
  }

}
ComponentInformation.addConstructor('ComponentInformation', ComponentInformation);
