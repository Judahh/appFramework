import { Component } from './../../component/component';

export class ComponentPath extends Component {

  constructor(father?: Component) {
    super('path', father, true);
    this.className = 'ComponentPath';
  }
}
ComponentPath.addConstructor('ComponentPath', ComponentPath);
