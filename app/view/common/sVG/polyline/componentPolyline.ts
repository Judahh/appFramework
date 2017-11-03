importJS('app/view/util/util');
importJS('app/view/common/component/component');

import { Component } from './../../component/component';

export class ComponentPolyline extends Component {

  constructor(father?: Component, tag?, sVG?) {
    super(father, 'polyline', true);
  }
}