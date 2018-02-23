import { Component } from './../../component/component';
// import { ComponentFont } from './font/componentFont';
// tslint:disable-next-line:no-empty
try { require('./componentColorEffect.css'); } catch (e) { };

export class ComponentColorEffect extends Component {
  colorEffect: string;
  // font: ComponentFont;

  constructor(father?: Component) {
    super(father);
    // this.font = new ComponentFont(this);
  }
}
ComponentColorEffect.addConstructor(ComponentColorEffect.name, ComponentColorEffect);
