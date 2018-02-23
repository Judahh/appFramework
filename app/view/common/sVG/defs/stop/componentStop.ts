import { Component } from './../../../component/component';

export class ComponentStop extends Component {

  constructor(father?: Component, tag?, sVG?) {
    super(father, 'stop', true);
  }
}
ComponentStop.addConstructor(ComponentStop.name, ComponentStop);
