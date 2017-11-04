import { Component } from './../../component/component';

export class ComponentRangeSlider extends Component {

  constructor(father?: Component, tag?) {
    super(father, 'input');
    this.element.setAttribute('type', 'range');
  }

}