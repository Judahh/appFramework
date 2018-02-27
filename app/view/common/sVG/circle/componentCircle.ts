import { Component } from './../../component/component';

export class ComponentCircle extends Component {
  constructor(father?: Component) {
    super('circle', father, true);
    this.className = 'ComponentCircle';
  }
}
ComponentCircle.addConstructor('ComponentCircle', ComponentCircle);
