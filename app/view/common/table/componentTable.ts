import { Component } from './../component/component';
import { Util } from './../../util/util';
import { ComponentItem } from './../item/componentItem';
import { ComponentTableLine } from './tableLine/componentTableLine';

export class ComponentTable extends Component {
  arrayItem: Array<ComponentItem>;
  arrayTableLine: Array<ComponentTableLine>;


  constructor(father?: Component, tag?: string) {
    super(father, tag);
    this.arrayTableLine = new Array<ComponentTableLine>();
    this.arrayTableLine.type = ComponentTableLine;
    this.arrayItem = new Array<ComponentItem>();
    this.arrayItem.type = ComponentItem;
  }

}
ComponentTable.addConstructor(ComponentTable.name, ComponentTable);
