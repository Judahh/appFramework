import { Component } from './../component/component';
import { ComponentDivisor } from './../divisor/componentDivisor';
// import { Array } from 'simpleutils';
import { Util } from './../../util/util';
require('./componentMenuVertical.css');

export class ComponentMenuVertical extends Component{
  class: string;
  arrayDivisor: Array<ComponentDivisor>;
  
  constructor(father?: Component) {
      super(father);
      this.arrayDivisor = new Array<ComponentDivisor>();
      this.arrayDivisor.type = ComponentDivisor;
  }
}