import { Component } from './../../component/component';
import { ComponentDataList } from './../textField/dataList/componentDataList';
// import { Array } from 'simpleutils';
import { Util } from './../../../util/util';

export class ComponentTextField extends Component {
  //IF DATALIST IT NEEDS A INPUT
  //<input list='datalistID' name='inputNAME'>
  //<datalist id='datalistID'>
  arrayDataList: Array<ComponentDataList>;

  constructor(father?: Component, tag?) {
    super(father, 'input');
    this.arrayDataList = new Array<ComponentDataList>();
    this.arrayDataList.type = ComponentDataList;
  }
}