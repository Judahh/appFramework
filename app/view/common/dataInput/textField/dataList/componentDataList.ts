import { Component } from './../../../component/component';
import { ComponentOption } from './../../comboBox/option/componentOption';
// import { Array } from 'simpleutils';
import { Util } from './../../../../util/util';

export class ComponentDataList extends Component {
  arrayOption: Array<ComponentOption>;

  constructor(father?: Component, tag?) {
    super(father, 'datalist');
    this.arrayOption = new Array<ComponentOption>();
    this.arrayOption.type = ComponentOption;
  }
}