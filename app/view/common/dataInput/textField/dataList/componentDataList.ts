import { Component } from './../../../component/component';
import { ComponentOption } from './../../comboBox/option/componentOption';
import { Util } from './../../../../util/util';
// tslint:disable-next-line:no-empty
try { require('./componentDataList.css'); } catch (e) { };

export class ComponentDataList extends Component {
  arrayOption: Array<ComponentOption>;

  constructor(father?: Component, tag?) {
    super(father, 'datalist');
    this.arrayOption = new Array<ComponentOption>();
    this.arrayOption.type = ComponentOption;
  }
}
ComponentDataList.addConstructor(ComponentDataList.name, ComponentDataList);
