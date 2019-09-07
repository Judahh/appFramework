import 'simpleutils';
import { Component } from '../../../component/component';
import { ComponentDataList } from './dataList/componentDataList';
import { ComponentBasicText } from '../componentBasicText';


export class ComponentTextField extends ComponentBasicText {
  arrayDataList: Array<ComponentDataList>;

  constructor(father?: Component) {
    super('input', father);
    this.className = 'ComponentTextField';
    this.arrayDataList = new Array<ComponentDataList>();
    this.arrayDataList.type = ComponentDataList;
  }

}
ComponentTextField.addConstructor('ComponentTextField', ComponentTextField);
