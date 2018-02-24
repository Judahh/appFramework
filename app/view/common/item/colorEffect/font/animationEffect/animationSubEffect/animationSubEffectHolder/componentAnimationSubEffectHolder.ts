import { Component } from './../../../../../../component/component';

export class ComponentAnimationSubEffectHolder extends Component {
  // information: ComponentInformation;

  constructor(father?: Component) {
    super(father);
    // this.information = new ComponentInformation(this);
  }
}
ComponentAnimationSubEffectHolder.addConstructor(ComponentAnimationSubEffectHolder.name, ComponentAnimationSubEffectHolder);
