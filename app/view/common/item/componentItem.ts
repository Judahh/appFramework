// import { Array } from 'simpleutils';
import { Util } from './../../util/util';
import { Component } from './../component/component';

// import { ComponentMenuHorizontal } from './../menuHorizontal/componentMenuHorizontal';
// import { ComponentMenuVertical } from './../menuVertical/componentMenuVertical';
// import { ComponentDivisor } from './../divisor/componentDivisor';
import { ComponentForm } from './../form/componentForm';

// import { ComponentColorEffect } from './colorEffect/componentColorEffect';
// tslint:disable-next-line:no-empty
try { require('./componentItem.css'); } catch (e) { };

export class ComponentItem extends Component {
  // colorEffect: ComponentColorEffect;
  // arrayMenuHorizontal: Array<ComponentMenuHorizontal>;
  // arrayMenuVertical: Array<ComponentMenuVertical>;

  // divisor: ComponentDivisor;

  form: ComponentForm;
  formChecked: boolean;

  constructor(father?: Component, tag?: string) {
    super(father, tag);
    // this.getdivisor();
    // this.colorEffect = new ComponentColorEffect(this);
    // this.arrayMenuHorizontal = new Array<ComponentMenuHorizontal>();
    // this.arrayMenuHorizontal.type = ComponentMenuHorizontal;
    // this.arrayMenuVertical = new Array<ComponentMenuVertical>();
    // this.arrayMenuVertical.type = ComponentMenuVertical;
    // this.arrayDivisor = new Array<ComponentDivisor>();
    // this.arrayDivisor.type = ComponentDivisor;
  }

  // public getPage() {
  //   return this.divisor.getPage();
  // }

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

  // private getdivisor() {
  //   this.divisor = <ComponentDivisor>this.seekFather('ComponentDivisor');
  // }
}
ComponentItem.addConstructor(ComponentItem.name, ComponentItem);
