import { Component } from './../../../../component/component';
import { ComponentAnimationSubEffect } from './animationSubEffect/componentAnimationSubEffect';

export class ComponentAnimationEffect extends Component{
  animationSubEffect: ComponentAnimationSubEffect;

  constructor(father?: Component){
    super(father);
    this.animationSubEffect = new ComponentAnimationSubEffect(this);
  }
}