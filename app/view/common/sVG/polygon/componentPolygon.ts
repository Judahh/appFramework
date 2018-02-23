import { Component } from './../../component/component';

export class ComponentPolygon extends Component {

  constructor(father?: Component, tag?, sVG?) {
    super(father, 'polygon', true);
  }
}
ComponentPolygon.addConstructor(ComponentPolygon.name, ComponentPolygon);
