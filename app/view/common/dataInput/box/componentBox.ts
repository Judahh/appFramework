import { Component } from './../../component/component';
import { ComponentGeneric } from './../../component/generic/componentGeneric';

export class ComponentBox extends Component {
  // type = radio or checkbox
  boxLabel: ComponentGeneric;

  constructor(father?: Component, tag?) {
    super(father, 'input');
    this.boxLabel = new ComponentGeneric(this.father, 'ComponentLabel');
    this.boxLabel.getElement().setAttribute('for', this.element.id);
  }

}
ComponentBox.addConstructor(ComponentBox.name, ComponentBox);
