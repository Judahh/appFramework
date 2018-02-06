// import { Array } from 'simpleutils';
import { Util } from './../../../util/util';
import { Component } from './../../component/component';
import { ComponentDivisor } from './../../divisor/componentDivisor';
try { require('./componentLeftHolder.css'); } catch (e) { };

export class ComponentLeftHolder extends Component{
  class: string;
  
  constructor(father?: Component) {
      super(father);
      this.arrayDivisor = new Array<ComponentDivisor>();
      this.arrayDivisor.type = ComponentDivisor;
  }
}