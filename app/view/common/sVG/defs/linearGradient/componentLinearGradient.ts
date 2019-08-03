import 'simpleutils';
import { Util } from 'basicutil';
import { Component } from './../../../component/component';
import { ComponentStop } from './../stop/componentStop';

export class ComponentLinearGradient extends Component {
  arrayStop: Array<ComponentStop>;

  constructor(father?: Component) {
    super('linearGradient', father, true);
    this.className = 'ComponentLinearGradient';
    this.arrayStop = new Array<ComponentStop>();
    this.arrayStop.type = ComponentStop;
  }
}
ComponentLinearGradient.addConstructor('ComponentLinearGradient', ComponentLinearGradient);
