import { Component } from './../component/component';
import { ComponentDataInput } from './../dataInput/componentDataInput';
// import { Array } from 'simpleutils';
import { Util } from './../../util/util';
// tslint:disable-next-line:no-empty
try { require('./componentForm.css'); } catch (e) { };


export class ComponentForm extends Component {
  arrayDataInput: Array<ComponentDataInput>;

  // IF DATALIST IT NEEDS A INPUT
  // <input list='datalistID' name='inputNAME'>
  // <datalist id='datalistID'>

  constructor(father?: Component, tag?) {
    super(father, tag);
    this.arrayDataInput = new Array<ComponentDataInput>();
    this.arrayDataInput.type = ComponentDataInput;
  }
}
ComponentForm.addConstructor(ComponentForm.name, ComponentForm);
