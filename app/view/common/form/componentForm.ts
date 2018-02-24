import { Component } from './../component/component';
import { Util } from './../../util/util';
// tslint:disable-next-line:no-empty
try { require('./componentForm.css'); } catch (e) { };

export class ComponentForm extends Component {

  constructor(father?: Component, tag?) {
    super(father, tag);
  }
}
ComponentForm.addConstructor(ComponentForm.name, ComponentForm);
