importJS('app/view/common/component/component');
importJS('app/view/common/item/colorEffect/font/animationEffect/componentAnimationEffect');

import { Component } from './../../../component/component';
import { ComponentAnimationEffect } from './animationEffect/componentAnimationEffect';

export class ComponentFont extends Component{
  animationEffect:ComponentAnimationEffect;

  constructor(father?: Component){
    super(father);
    this.animationEffect = new ComponentAnimationEffect(this);
  }
}