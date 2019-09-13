import { Component } from '../component/component';
import { BasicViewModel } from './basicViewModel';
import * as ko from 'knockout';
export class ComponentValue extends Component {
    basicViewModel: BasicViewModel;
    constructor(tag?: string, father?: Component, type?: string) {
      super(tag, father);
      let _self = this;
      _self.className = 'ComponentValue';
      if (!type)
        type = 'text';
      _self.basicViewModel = new BasicViewModel(type, _self.element, ko);
      ko.applyBindings(_self.basicViewModel, _self.element); // receive BasicModel in constructor and save
    }
}
ComponentValue.addConstructor('ComponentValue', ComponentValue);
