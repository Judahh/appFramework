import { Component } from './../../component/component';

export class ComponentRectangle extends Component {

  constructor(father?: Component, tag?, sVG?) {
    super(father, 'rect', true);
  }
}
ComponentRectangle.addConstructor(ComponentRectangle.name, ComponentRectangle);
