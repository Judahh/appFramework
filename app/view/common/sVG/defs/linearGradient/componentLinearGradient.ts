// import { Array } from 'simpleutils';
import { Util } from './../../../../util/util';
import { Component } from './../../../component/component';
import { ComponentStop } from './../stop/componentStop';

export class ComponentLinearGradient extends Component {
  arrayStop: Array<ComponentStop>;

  constructor(father?: Component, tag?, sVG?) {
    super(father, 'linearGradient', true);
    this.arrayStop = new Array<ComponentStop>();
    this.arrayStop.type = ComponentStop;
  }
}