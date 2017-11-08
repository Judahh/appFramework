import { Component } from './../../../component/component';
import { ComponentAnimationEffect } from './animationEffect/componentAnimationEffect';
require('./componentFont.css');

export class ComponentFont extends Component{
  animationEffect:ComponentAnimationEffect;

  constructor(father?: Component){
    super(father);
    this.animationEffect = new ComponentAnimationEffect(this);
  }
}