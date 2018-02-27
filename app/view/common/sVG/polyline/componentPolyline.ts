import { Component } from './../../component/component';

export class ComponentPolyline extends Component {

  constructor(father?: Component) {
    super('polyline', father, true);
    this.className = 'ComponentPolyline';
  }
}
ComponentPolyline.addConstructor('ComponentPolyline', ComponentPolyline);
