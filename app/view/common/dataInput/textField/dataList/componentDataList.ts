import { Component } from './../../../component/component';
import { ComponentOption } from './../../comboBox/option/componentOption';
// import { Array } from 'simpleutils';
import { Util } from './../../../../util/util';
try {require('./componentDataList.css');}catch(e){};

export class ComponentDataList extends Component {
  arrayOption: Array<ComponentOption>;

  constructor(father?: Component, tag?) {
    super(father, 'datalist');
    this.arrayOption = new Array<ComponentOption>();
    this.arrayOption.type = ComponentOption;
  }
}