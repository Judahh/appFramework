import { Component } from './../../component/component';
import { ComponentOption } from './option/componentOption';
import { Util } from './../../../util/util';

export class ComponentComboBox extends Component {
  arrayOption: Array<ComponentOption>;

  constructor(father?: Component, tag?) {
    super(father, 'select');
    this.className = 'ComponentComboBox';
    this.arrayOption = new Array<ComponentOption>();
    this.arrayOption.type = ComponentOption;
  }
}
ComponentComboBox.addConstructor('ComponentComboBox', ComponentComboBox);
