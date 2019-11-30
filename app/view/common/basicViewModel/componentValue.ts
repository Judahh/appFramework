import { Component } from '../component/component';
import { BasicViewModel } from './basicViewModel';
export class ComponentValue extends Component {
    basicViewModel: BasicViewModel;

    static cleanAdd(array: Array<any>, value: any) {
      if (!Array.isArray(array) || !array.length)
        array = new Array<any>();
      array.push(value);
      return array;
    }
    constructor(tag?: string, father?: Component, sVG?: boolean, arrayType?: Array<string>, arrayBindHandlers?: Array<string>) {
      super(tag, father, sVG);
      let _self = this;
      _self.className = 'ComponentValue';
      _self.basicViewModel = new BasicViewModel(arrayType, _self.element, arrayBindHandlers);
    }
}
ComponentValue.addConstructor('ComponentValue', ComponentValue);
