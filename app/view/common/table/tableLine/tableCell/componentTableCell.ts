import { Component } from './../../../component/component';
import { Util } from './../../../../util/util';
import { ComponentItem } from './../../../item/componentItem';
try { require('./componenTableCell.css'); } catch (e) { };

export class ComponenTableCell extends Component {
  arrayItem: Array<ComponentItem>;

  constructor(father?: Component) {
    super(father, 'th');
    this.arrayItem = new Array<ComponentItem>();
    this.arrayItem.type = ComponentItem;
  }

}