import { Component } from './../../component/component';

export class ComponentRangeSlider extends Component {

  constructor(father?: Component, tag?) {
    super(father, 'input');
    this.className = 'ComponentRangeSlider';
    this.element.setAttribute('type', 'range');
  }
}
ComponentRangeSlider.addConstructor('ComponentRangeSlider', ComponentRangeSlider);
