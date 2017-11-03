// importJS('app/view/util/util');
// importJS('app/view/serviceModel/serviceModel');
// importJS('app/view/common/component/component');
// importJS('app/view/common/image/img/componentImg');

// importCSS('app/view/common/image/componentImage');
import { Component } from './../component/component';
import { ComponentImg } from './img/componentImg';

export class ComponentImage extends Component{
  img:ComponentImg;

  constructor(father?: Component){
    super(father);
    this.img = new ComponentImg(this);
  }
}