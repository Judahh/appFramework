import 'simpleutils';
import { Util } from 'basicutil';
import { Component } from './../../../component/component';
import { ComponentStop } from './../stop/componentStop';

export class ComponentRadialGradient extends Component {
  arrayStop: Array<ComponentStop>;

  constructor(father?: Component) {
    super('radialGradient', father, true);
    this.className = 'ComponentRadialGradient';
    this.arrayStop = new Array<ComponentStop>();
    this.arrayStop.type = ComponentStop;
  }
}
ComponentRadialGradient.addConstructor('ComponentRadialGradient', ComponentRadialGradient);
