import { Component } from './../../../../../../component/component';
// import { ComponentInformation } from './information/componentInformation';
// tslint:disable-next-line:no-empty
try { require('./componentAnimationSubEffectHolder.css'); } catch (e) { };

export class ComponentAnimationSubEffectHolder extends Component {
  // information: ComponentInformation;

  constructor(father?: Component) {
    super(father);
    // this.information = new ComponentInformation(this);
  }
}
ComponentAnimationSubEffectHolder.addConstructor(ComponentAnimationSubEffectHolder.name, ComponentAnimationSubEffectHolder);
