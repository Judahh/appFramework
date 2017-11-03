import { Component } from './../../../../../component/component';
import { ComponentAnimationSubEffectHolder } from './animationSubEffectHolder/componentAnimationSubEffectHolder';
import { Array } from 'simpleutils';

export class ComponentAnimationSubEffect extends Component{
  arrayAnimationSubEffectHolder: Array<ComponentAnimationSubEffectHolder>;

  constructor(father?: Component){
    super(father);
    this.arrayAnimationSubEffectHolder = new Array<ComponentAnimationSubEffectHolder>();
    this.arrayAnimationSubEffectHolder.type=ComponentAnimationSubEffectHolder;
  }
}