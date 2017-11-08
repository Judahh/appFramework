import { Component } from './../../component/component';
import { ComponentOption } from './option/componentOption';
import { Util } from './../../../util/util';
// import { Array } from 'simpleutils';

export class ComponentComboBox extends Component {
  arrayOption: Array<ComponentOption>;

  constructor(father?: Component, tag?) {
    super(father, 'select');
    this.arrayOption = new Array<ComponentOption>();
    this.arrayOption.type = ComponentOption;
  }
}