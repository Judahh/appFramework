import { Component } from './../../component/component';
import { Util } from './../../../util/util';
import { ComponentItem } from './../../item/componentItem';
import { ComponenTableCell } from './tableCell/componentTableCell';
try { require('./componenTableLine.css'); } catch (e) { };

export class ComponenTableLine extends Component {
  arrayItem: Array<ComponentItem>;
  arrayTableCell: Array<ComponenTableCell>;


  constructor(father?: Component) {
    super(father, 'tr');
    this.arrayTableCell = new Array<ComponenTableCell>();
    this.arrayTableCell.type = ComponenTableCell;
    this.arrayItem = new Array<ComponentItem>();
    this.arrayItem.type = ComponentItem;
  }

}