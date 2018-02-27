import { Component } from './../../../component/component';

export class ComponentStop extends Component {

  constructor(father?: Component) {
    super('stop', father, true);
    this.className = 'ComponentStop';
  }
}
ComponentStop.addConstructor('ComponentStop', ComponentStop);
