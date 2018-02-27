import { Component } from './../../../component/component';

export class ComponentStop extends Component {

  constructor(father?: Component, tag?, sVG?) {
    super(father, 'stop', true);
    this.className = 'ComponentStop';
  }
}
ComponentStop.addConstructor('ComponentStop', ComponentStop);
