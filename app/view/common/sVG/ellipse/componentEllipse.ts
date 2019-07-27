import { Component } from './../../component/component';

export class ComponentEllipse extends Component {

  constructor(father?: Component) {
    super('ellipse', father, true);
    this.className = 'ComponentEllipse';
  }
}
ComponentEllipse.addConstructor('ComponentEllipse', ComponentEllipse);
