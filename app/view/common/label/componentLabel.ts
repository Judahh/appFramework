import { Component } from '../component/component';

export class ComponentLabel extends Component {
  // type = radio or checkbox

  constructor() {
    super('label');
    this.className = 'ComponentLabel';
  }

  public setFather(father) {
    super.setFather(father);
    this.getElement().setAttribute('for', father.element.id);
  }

}
ComponentLabel.addConstructor('ComponentLabel', ComponentLabel);
