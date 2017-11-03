import { Component } from './../component/component';
import { ComponentDataInput } from './../dataInput/componentDataInput';

export class ComponentForm extends Component {
  arrayDataInput: Array<ComponentDataInput>;

  //IF DATALIST IT NEEDS A INPUT
  //<input list="datalistID" name="inputNAME">
  //<datalist id="datalistID">

  constructor(father?: Component, tag?) {
    super(father, tag);
    this.arrayDataInput = new Array<ComponentDataInput>();
    this.arrayDataInput.type = ComponentDataInput;
  }

}