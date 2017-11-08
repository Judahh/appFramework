import { Component } from './../../../component/component';
import { ComponentAnimationEffect } from './animationEffect/componentAnimationEffect';
try { require('./componentFont.css'); } catch (e) { };


export class ComponentFont extends Component{
  animationEffect:ComponentAnimationEffect;

  constructor(father?: Component){
    super(father);
    this.animationEffect = new ComponentAnimationEffect(this);
  }
}