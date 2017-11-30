import { Component } from './../component/component';
import { Util } from './../../util/util';
import { ComponentItem } from './../item/componentItem';
import { ComponenTableLine } from './tableLine/componentTableLine';
try { require('./componenTable.css'); } catch (e) { };

export class ComponenTable extends Component {
  arrayItem: Array<ComponentItem>;
  arrayTableLine: Array<ComponenTableLine>;


  constructor(father?: Component, tag?: string) {
    super(father, tag);
    this.arrayTableLine = new Array<ComponenTableLine>();
    this.arrayTableLine.type = ComponenTableLine;
    this.arrayItem = new Array<ComponentItem>();
    this.arrayItem.type = ComponentItem;
  }

}