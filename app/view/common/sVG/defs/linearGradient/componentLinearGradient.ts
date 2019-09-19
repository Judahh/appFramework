import 'simpleutils';
import { Component } from './../../../component/component';
import { ComponentGeneric } from './../../../component/generic/componentGeneric';

export class ComponentLinearGradient extends Component {
  arrayStop: Array<ComponentGeneric>;

  constructor(father?: Component) {
    super('linearGradient', father, true);
    this.className = 'ComponentLinearGradient';
    this.arrayStop = new Array<ComponentGeneric>();
    this.arrayStop.type = ComponentGeneric;
  }
}
ComponentLinearGradient.addConstructor('ComponentLinearGradient', ComponentLinearGradient);
