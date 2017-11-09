// import { Array } from 'simpleutils';
import { Util } from './../../util/util';
import { Component } from './../component/component';

import { ComponentMenuHorizontal } from './../menuHorizontal/componentMenuHorizontal';
import { ComponentMenuVertical } from './../menuVertical/componentMenuVertical';
import { ComponentDivisor } from './../divisor/componentDivisor';
import { ComponentForm } from './../form/componentForm';

import { ComponentColorEffect } from './colorEffect/componentColorEffect';
try { require('./componentItem.css'); } catch (e) { };

export class ComponentItem extends Component {
  routerLink: string;
  colorEffect: ComponentColorEffect;
  arrayMenuHorizontal: Array<ComponentMenuHorizontal>;
  arrayMenuVertical: Array<ComponentMenuVertical>;

  divisor: ComponentDivisor;

  form: ComponentForm;
  formChecked: boolean;

  constructor(father?: Component, tag?: string) {
    super(father, tag);
    this.getdivisor();
    this.colorEffect = new ComponentColorEffect(this);
    this.arrayMenuHorizontal = new Array<ComponentMenuHorizontal>();
    this.arrayMenuHorizontal.type = ComponentMenuHorizontal;
    this.arrayMenuVertical = new Array<ComponentMenuVertical>();
    this.arrayMenuVertical.type = ComponentMenuVertical;
  }

  private getdivisor() {
    this.divisor = <ComponentDivisor>this.seekFatherComponent('ComponentDivisor');
  }

  public getPage() {
    return this.divisor.getPage();
  }

  protected setForm() {
    this.form = <ComponentForm>this.seekFatherComponent('ComponentForm');
    this.formChecked = true;
  }

  public getForm() {
    if (!this.formChecked) {
      this.setForm();
    }
    return this.form;
  }
}