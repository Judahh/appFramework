import { Component } from './../../component/component';
import { ComponentLabel } from './../../label/componentLabel';
export class ComponentBox extends Component {
  //type = radio or checkbox
  boxLabel: ComponentLabel;

  constructor(father?: Component, tag?) {
    super(father, "input");
    this.boxLabel = new ComponentLabel(this.father);
    this.boxLabel.getElement().setAttribute("for", this.element.id);
  }

}