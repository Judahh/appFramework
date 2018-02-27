import { Component } from './../../../component/component';
import { ComponentOption } from './../../comboBox/option/componentOption';
import { Util } from './../../../../util/util';

export class ComponentDataList extends Component {
  arrayOption: Array<ComponentOption>;

  constructor(father?: Component) {
    super('datalist', father);
    this.className = 'ComponentDataList';
    this.arrayOption = new Array<ComponentOption>();
    this.arrayOption.type = ComponentOption;
  }
}
ComponentDataList.addConstructor('ComponentDataList', ComponentDataList);
