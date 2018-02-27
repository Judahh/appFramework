import { Component } from './../../component/component';

export class ComponentRectangle extends Component {

  constructor(father?: Component) {
    super('rect', father, true);
    this.className = 'ComponentRectangle';
  }
}
ComponentRectangle.addConstructor('ComponentRectangle', ComponentRectangle);
