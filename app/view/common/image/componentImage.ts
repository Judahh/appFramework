import { Component } from './../component/component';
import { ComponentImg } from './img/componentImg';

export class ComponentImage extends Component {
  img: ComponentImg;

  constructor(father?: Component) {
    super(father);
    this.img = new ComponentImg(this);
  }
}
ComponentImage.addConstructor(ComponentImage.name, ComponentImage);
