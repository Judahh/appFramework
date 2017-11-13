import { Component } from './../../component/component';
import { ComponentDataList } from './../textField/dataList/componentDataList';
import { ComponentKeyboard } from './../keyboard/componentKeyboard';
import { Util } from './../../../util/util';
try {require('./componentTextField.css');}catch(e){};


export class ComponentTextField extends Component {
  arrayDataList: Array<ComponentDataList>;
  arrayKeyboard: Array<ComponentKeyboard>;

  constructor(father?: Component, tag?) {
    super(father, 'input');
    this.arrayDataList = new Array<ComponentDataList>();
    this.arrayDataList.type = ComponentDataList;
    this.arrayKeyboard = new Array<ComponentKeyboard>();
    this.arrayKeyboard.type = ComponentKeyboard;
  }
}