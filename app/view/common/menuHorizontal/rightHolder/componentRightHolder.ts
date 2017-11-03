// importJS('app/view/util/util');
// importJS('app/view/serviceModel/serviceModel');
// importJS('app/view/common/component/component');
// importJS('app/view/common/item/componentItem');
// importJS('app/view/common/divisor/componentDivisor');

import { Component } from './../../component/component';
import { ComponentDivisor } from './../../divisor/componentDivisor';

export class ComponentRightHolder extends Component{
  class: string;
  arrayDivisor: Array<ComponentDivisor>;
  
  constructor(father?: Component) {
      super(father);
      this.arrayDivisor = new Array<ComponentDivisor>();
      this.arrayDivisor.type = ComponentDivisor;
  }
}