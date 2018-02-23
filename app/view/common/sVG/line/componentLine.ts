import { Component } from './../../component/component';

export class ComponentLine extends Component {

  constructor(father?: Component, tag?, sVG?) {
    super(father, 'line', true);
  }
}
ComponentLine.addConstructor(ComponentLine.name, ComponentLine);
