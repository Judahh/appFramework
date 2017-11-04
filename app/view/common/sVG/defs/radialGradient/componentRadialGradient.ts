import { Array } from 'simpleutils';
import { Component } from './../../../component/component';
import { ComponentStop } from './../stop/componentStop';

export class ComponentRadialGradient extends Component {
  arrayStop: Array<ComponentStop>;

  constructor(father?: Component, tag?, sVG?) {
    super(father, 'radialGradient', true);    
    this.arrayStop = new Array<ComponentStop>();
    this.arrayStop.type = ComponentStop;
  }
}