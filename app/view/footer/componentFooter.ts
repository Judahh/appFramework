// import { Array } from 'simpleutils';
import { Util } from './../util/util';
import { Component } from './../common/component/component';
import { ComponentMenuHorizontal } from './../common/menuHorizontal/componentMenuHorizontal';
try { require('./componentFooter.css'); } catch (e) { };

export class ComponentFooter extends Component{
  arrayMenuHorizontal: Array<ComponentMenuHorizontal>;

  constructor(father?: Component){
    super(father);
    this.arrayMenuHorizontal = new Array<ComponentMenuHorizontal>();
    this.arrayMenuHorizontal.type = ComponentMenuHorizontal;
    this.getJSONPromise(this.tag);
  }
}