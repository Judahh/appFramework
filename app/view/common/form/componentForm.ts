import { Component } from './../component/component';
import { Util } from './../../util/util';

export class ComponentForm extends Component {

  constructor(father?: Component, tag?) {
    super(father, tag);
  }
}
ComponentForm.addConstructor(ComponentForm.name, ComponentForm);
