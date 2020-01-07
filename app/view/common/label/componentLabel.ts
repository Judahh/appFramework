import { Component } from '../component/component';
import { GeneticCode } from '../child/geneticCode';

export class ComponentLabel extends Component {
  // type = radio or checkbox

  constructor(geneticCode?: GeneticCode) {
    super({...{name: 'ComponentLabel', tag: 'label'}, ...geneticCode});
  }

  public setFather(father) {
    super.setFather(father);
    this.getElement().setAttribute('for', father.element.id);
  }

}
ComponentLabel.addConstructor('ComponentLabel', ComponentLabel);
