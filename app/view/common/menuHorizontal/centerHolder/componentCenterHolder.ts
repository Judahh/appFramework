// import { Array } from 'simpleutils';
import { Util } from './../../../util/util';
import { Component } from './../../component/component';
import { ComponentDivisor } from './../../divisor/componentDivisor';
try { require('./componentCenterHolder.css'); } catch (e) { };

export class ComponentCenterHolder extends Component{
  class: string;
  arrayDivisor: Array<ComponentDivisor>;
  
  constructor(father?: Component) {
      super(father);
      this.arrayDivisor = new Array<ComponentDivisor>();
      this.arrayDivisor.type = ComponentDivisor;
  }
}