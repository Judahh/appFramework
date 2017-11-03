// importJS('app/view/util/util');
// importJS('app/view/common/component/component');
// importJS('app/view/common/menuHorizontal/componentMenuHorizontal');
// importCSS('app/view/footer/componentFooter');
import { Component } from './../common/component/component';
import { ComponentMenuHorizontal } from './../common/menuHorizontal/componentMenuHorizontal';

export class ComponentFooter extends Component{
  arrayMenuHorizontal: Array<ComponentMenuHorizontal>;

  constructor(father?: Component){
    super(father);
    this.arrayMenuHorizontal = new Array<ComponentMenuHorizontal>();
    this.arrayMenuHorizontal.type = ComponentMenuHorizontal;
    this.getJSONPromise(this.tag);
  }
}