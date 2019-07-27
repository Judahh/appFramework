import { Util } from './../../util/util';
import { Component } from './../component/component';
import { ComponentGeneric } from './../component/generic/componentGeneric';

export class ComponentItem extends Component {
  form: ComponentGeneric;
  formChecked: boolean;

  constructor(father?: Component) {
    super('item', father);
    this.className = 'ComponentItem';
  }

  public getForm() {
    if (!this.formChecked) {
      this.setForm();
    }
    return this.form;
  }

  protected setForm() {
    this.form = <ComponentGeneric>this.seekFather('ComponentForm');
    this.formChecked = true;
  }
}
ComponentItem.addConstructor('ComponentItem', ComponentItem);
