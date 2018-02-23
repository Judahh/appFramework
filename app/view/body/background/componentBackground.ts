import { Component } from './../../common/component/component';
import { ComponentImage } from './../../common/image/componentImage';
// tslint:disable-next-line:no-empty
try { require('./componentBackground.css'); } catch (e) { };

export class ComponentBackground extends Component {
  image: ComponentImage;

  constructor(father?: Component) {
    super(father);
    this.image = new ComponentImage(this);
  }
}
ComponentBackground.addConstructor(ComponentBackground.name, ComponentBackground);
