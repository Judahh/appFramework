import { Component } from './../../../../../../component/component';
import { ComponentInformation } from './information/componentInformation';
require('./componentAnimationSubEffectHolder.css');

export class ComponentAnimationSubEffectHolder extends Component{
  information: ComponentInformation;

  constructor(father?: Component){
    super(father);
    this.information = new ComponentInformation(this);
  }
}