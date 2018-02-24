import { Component } from './../../../../../component/component';
import { Util } from './../../../../../../util/util';
// tslint:disable-next-line:no-empty
try { require('./componentAnimationSubEffect.css'); } catch (e) { };

export class ComponentAnimationSubEffect extends Component {
  constructor(father?: Component) {
    super(father);
  }
}
ComponentAnimationSubEffect.addConstructor(ComponentAnimationSubEffect.name, ComponentAnimationSubEffect);
