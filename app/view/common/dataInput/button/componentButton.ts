import { Component } from './../../component/component';
import { ComponentItem } from './../../item/componentItem';
import { ComponentGeneric } from './../../component/generic/componentGeneric';

export class ComponentButton extends Component {
  item: ComponentItem;
  form: ComponentGeneric;
  formChecked: boolean;

  constructor(father?: Component) {
    super('button', father);
    this.className = 'ComponentButton';
    this.item = new ComponentItem(this);
  }

  protected setForm() {
    this.form = <ComponentGeneric>this.seekFather('ComponentForm');
    this.formChecked = true;
  }

  public getForm() {
    if (!this.formChecked) {
      this.setForm();
    }
    return this.form;
  }
}
ComponentButton.addConstructor('ComponentButton', ComponentButton);
