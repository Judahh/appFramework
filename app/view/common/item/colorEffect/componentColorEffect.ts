import { Component } from './../../component/component';
import { ComponentFont } from './font/componentFont';
require('./componentColorEffect.css');

export class ComponentColorEffect extends Component{
  colorEffect: string;
  font: ComponentFont;

  constructor(father?: Component){
    super(father);
    this.font = new ComponentFont(this);
  }
}