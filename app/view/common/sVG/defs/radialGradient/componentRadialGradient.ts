import 'simpleutils';
import { Component } from './../../../component/component';
import { ComponentGeneric } from './../../../component/generic/componentGeneric';

export class ComponentRadialGradient extends Component {
  arrayStop: Array<ComponentGeneric>;

  constructor(father?: Component) {
    super('radialGradient', father, true);
    this.className = 'ComponentRadialGradient';
    this.arrayStop = new Array<ComponentGeneric>();
    this.arrayStop.type = ComponentGeneric;
  }
}
ComponentRadialGradient.addConstructor('ComponentRadialGradient', ComponentRadialGradient);
