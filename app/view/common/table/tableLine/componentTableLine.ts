import { Component } from './../../component/component';
import { Util } from './../../../util/util';
import { ComponentItem } from './../../item/componentItem';
import { ComponentTableCell } from './tableCell/componentTableCell';

export class ComponentTableLine extends Component {
  arrayItem: Array<ComponentItem>;
  arrayTableCell: Array<ComponentTableCell>;


  constructor(father?: Component) {
    super(father, 'tr');
    this.arrayTableCell = new Array<ComponentTableCell>();
    this.arrayTableCell.type = ComponentTableCell;
    this.arrayItem = new Array<ComponentItem>();
    this.arrayItem.type = ComponentItem;
  }

}
ComponentTableLine.addConstructor(ComponentTableLine.name, ComponentTableLine);
