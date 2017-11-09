import { Component } from './../../common/component/component';
import { ComponentImage } from './../../common/image/componentImage';
try {require('./componentBackground.css');}catch(e){};

export class ComponentBackground extends Component{
  image:ComponentImage;

  constructor(father?: Component){
    super(father);
    this.image = new ComponentImage(this);
  }
}