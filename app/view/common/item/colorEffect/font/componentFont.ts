import { Component } from './../../../component/component';
import { ComponentAnimationEffect } from './animationEffect/componentAnimationEffect';
// tslint:disable-next-line:no-empty
try { require('./componentFont.css'); } catch (e) { };

export class ComponentFont extends Component {
  animationEffect: ComponentAnimationEffect;

  constructor(father?: Component) {
    super(father);
    this.animationEffect = new ComponentAnimationEffect(this);
  }
}
ComponentFont.addConstructor(ComponentFont.name, ComponentFont);
