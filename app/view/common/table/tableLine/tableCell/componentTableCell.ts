import { Component } from './../../../component/component';
import { Util } from './../../../../util/util';
import { ComponentItem } from './../../../item/componentItem';
// tslint:disable-next-line:no-empty
try { require('./componentTableCell.css'); } catch (e) { };

export class ComponentTableCell extends Component {
  arrayItem: Array<ComponentItem>;

  constructor(father?: Component) {
    super(father, 'th');
    this.arrayItem = new Array<ComponentItem>();
    this.arrayItem.type = ComponentItem;
  }

}
ComponentTableCell.addConstructor(ComponentTableCell.name, ComponentTableCell);
