import { Component } from './../component/component';
// tslint:disable-next-line:no-empty
try { require('./componentProgressBar.css'); } catch (e) { };

export class ComponentProgressBar extends Component {

  constructor(father?: Component, tag?) {
    super(father, 'progress');
  }
}
ComponentProgressBar.addConstructor(ComponentProgressBar.name, ComponentProgressBar);
