import { Component } from './../../component/component';

export class ComponentLine extends Component {

  constructor(father?: Component) {
    super('line', father, true);
    this.className = 'ComponentLine';
  }
}
ComponentLine.addConstructor('ComponentLine', ComponentLine);
