import { Component } from './../component/component';
import { ComponentDivisor } from './../divisor/componentDivisor';
// import { Array } from 'simpleutils';
import { Util } from './../../util/util';
// tslint:disable-next-line:no-empty
try { require('./componentMenuVertical.css'); } catch (e) { };

export class ComponentMenuVertical extends Component {
  class: string;

  constructor(father?: Component) {
    super(father);
    this.arrayDivisor = new Array<ComponentDivisor>();
    this.arrayDivisor.type = ComponentDivisor;
  }
}
ComponentMenuVertical.addConstructor(ComponentMenuVertical.name, ComponentMenuVertical);
