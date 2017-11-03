importJS('app/view/util/util');
importJS('app/view/common/component/component');

import { Component } from './../component/component';

export class ComponentProgressBar extends Component {

  constructor(father?: Component, tag?) {
    super(father, "progress");
  }
}