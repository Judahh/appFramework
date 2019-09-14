import { Component } from '../component/component';
import { BasicViewModel } from './basicViewModel';
export class ComponentValue extends Component {
    basicViewModel: BasicViewModel;
    constructor(tag?: string, father?: Component, type?: string) {
      super(tag, father);
      let _self = this;
      _self.className = 'ComponentValue';
      if (!type)
        type = 'text';
      _self.basicViewModel = new BasicViewModel([type], _self.element);
    }
}
ComponentValue.addConstructor('ComponentValue', ComponentValue);
