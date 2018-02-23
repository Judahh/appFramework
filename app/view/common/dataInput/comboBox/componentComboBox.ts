import { Component } from './../../component/component';
import { ComponentOption } from './option/componentOption';
import { Util } from './../../../util/util';
// tslint:disable-next-line:no-empty
try { require('./componentComboBox.css'); } catch (e) { };

export class ComponentComboBox extends Component {
  arrayOption: Array<ComponentOption>;

  constructor(father?: Component, tag?) {
    super(father, 'select');
    this.arrayOption = new Array<ComponentOption>();
    this.arrayOption.type = ComponentOption;
  }
}
ComponentComboBox.addConstructor(ComponentComboBox.name, ComponentComboBox);
