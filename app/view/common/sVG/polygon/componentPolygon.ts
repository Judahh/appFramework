import { Component } from './../../component/component';

export class ComponentPolygon extends Component {

  constructor(father?: Component) {
    super('polygon', father, true);
    this.className = 'ComponentPolygon';
  }
}
ComponentPolygon.addConstructor('ComponentPolygon', ComponentPolygon);
