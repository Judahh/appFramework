import { Util } from './../../util/util';
import { Component } from './../component/component';
import { ComponentForm } from './../form/componentForm';
// tslint:disable-next-line:no-empty
try { require('./componentItem.css'); } catch (e) { };

export class ComponentItem extends Component {
  form: ComponentForm;
  formChecked: boolean;

  constructor(father?: Component, tag?: string) {
    super(father, tag);
  }

  public getForm() {
    if (!this.formChecked) {
      this.setForm();
    }
    return this.form;
  }

  protected setForm() {
    this.form = <ComponentForm>this.seekFather('ComponentForm');
    this.formChecked = true;
  }
}
ComponentItem.addConstructor(ComponentItem.name, ComponentItem);
