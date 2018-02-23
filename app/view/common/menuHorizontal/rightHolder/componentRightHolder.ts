// import { Array } from 'simpleutils';
import { Util } from './../../../util/util';
import { Component } from './../../component/component';
import { ComponentDivisor } from './../../divisor/componentDivisor';
// tslint:disable-next-line:no-empty
try { require('./componentRightHolder.css'); } catch (e) { };

export class ComponentRightHolder extends Component {
  class: string;

  constructor(father?: Component) {
    super(father);
    // this.arrayDivisor = new Array<ComponentDivisor>();
    // this.arrayDivisor.type = ComponentDivisor;
  }
}
ComponentRightHolder.addConstructor(ComponentRightHolder.name, ComponentRightHolder);
