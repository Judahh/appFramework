import { Component } from './../../component/component';

export class ComponentLine extends Component {

  constructor(father?: Component, tag?, sVG?) {
    super(father, 'line', true);
    this.className = 'ComponentLine';
  }
}
ComponentLine.addConstructor('ComponentLine', ComponentLine);
