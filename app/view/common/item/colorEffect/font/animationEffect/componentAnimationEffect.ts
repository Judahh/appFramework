import { Component } from './../../../../component/component';
import { ComponentAnimationSubEffect } from './animationSubEffect/componentAnimationSubEffect';
try { require('./componentAnimationEffect.css'); } catch (e) { };


export class ComponentAnimationEffect extends Component{
  animationSubEffect: ComponentAnimationSubEffect;

  constructor(father?: Component){
    super(father);
    this.animationSubEffect = new ComponentAnimationSubEffect(this);
  }
}