import { Component } from './../../component/component';
import { ComponentItem } from './../../item/componentItem';
import { ComponentForm } from './../../form/componentForm';


export class ComponentButton extends Component {
  item: ComponentItem;
  form: ComponentForm;
  formChecked: boolean;

  constructor(father?: Component, tag?) {
    super(father);
    this.item = new ComponentItem(this);
  }

  protected setForm() {
    this.form = <ComponentForm>this.seekFather('ComponentForm');
    this.formChecked = true;
  }

  public getForm() {
    if (!this.formChecked) {
      this.setForm();
    }
    return this.form;
  }
}
ComponentButton.addConstructor(ComponentButton.name, ComponentButton);
