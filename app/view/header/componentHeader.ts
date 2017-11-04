import { Array } from 'simpleutils';
import { Component } from './../common/component/component';
import { ComponentMenuHorizontal } from './../common/menuHorizontal/componentMenuHorizontal';


export class ComponentHeader extends Component{
  arrayMenuHorizontal: Array<ComponentMenuHorizontal>;

  constructor(father?: Component){
    super(father);
    this.arrayMenuHorizontal = new Array<ComponentMenuHorizontal>();
    this.arrayMenuHorizontal.type = ComponentMenuHorizontal;
    this.getJSONPromise(this.tag);
  }
}