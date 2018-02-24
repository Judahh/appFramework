// import { Array } from 'simpleutils';
import { Util } from './../../../util/util';
import { Component } from './../../component/component';
// tslint:disable-next-line:no-empty
try { require('./componentCenterHolder.css'); } catch (e) { };

export class ComponentCenterHolder extends Component {
  class: string;

  constructor(father?: Component) {
    super(father);
    // this.arrayDivisor = new Array<ComponentDivisor>();
    // this.arrayDivisor.type = ComponentDivisor;
  }
}
ComponentCenterHolder.addConstructor(ComponentCenterHolder.name, ComponentCenterHolder);
