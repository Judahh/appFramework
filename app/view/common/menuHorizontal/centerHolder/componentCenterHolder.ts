import { Array } from 'simpleutils';
import { Component } from './../../component/component';
import { ComponentDivisor } from './../../divisor/componentDivisor';

export class ComponentCenterHolder extends Component{
  class: string;
  arrayDivisor: Array<ComponentDivisor>;
  
  constructor(father?: Component) {
      super(father);
      this.arrayDivisor = new Array<ComponentDivisor>();
      this.arrayDivisor.type = ComponentDivisor;
  }
}