import { Component } from './../../component/component';

export class ComponentPolyline extends Component {

  constructor(father?: Component, tag?, sVG?) {
    super(father, 'polyline', true);
    this.className = 'ComponentPolyline';
  }
}
ComponentPolyline.addConstructor('ComponentPolyline', ComponentPolyline);
