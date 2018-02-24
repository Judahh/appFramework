import { Component } from './../component/component';
import { Util } from './../../util/util';
// tslint:disable-next-line:no-empty
try { require('./componentMenuVertical.css'); } catch (e) { };

export class ComponentMenuVertical extends Component {
  class: string;

  constructor(father?: Component) {
    super(father);
  }
}
ComponentMenuVertical.addConstructor(ComponentMenuVertical.name, ComponentMenuVertical);
