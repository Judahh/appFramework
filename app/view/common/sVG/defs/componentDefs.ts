// import { Array } from 'simpleutils';
import { Util } from './../../../util/util';
import { Component } from './../../component/component';
import { ComponentFilter } from './filter/componentFilter';
import { ComponentLinearGradient } from './linearGradient/componentLinearGradient';
import { ComponentRadialGradient } from './radialGradient/componentRadialGradient';


export class ComponentDefs extends Component {
  arrayFilter: Array<ComponentFilter>;

  arrayLinearGradient: Array<ComponentLinearGradient>;
  arrayRadialGradient: Array<ComponentRadialGradient>;

  constructor(father?: Component, tag?, sVG?) {
    super(father, 'defs', true);
    this.className = 'ComponentDefs';
    this.arrayFilter = new Array<ComponentFilter>();
    this.arrayFilter.type = ComponentFilter;

    this.arrayLinearGradient = new Array<ComponentLinearGradient>();
    this.arrayLinearGradient.type = ComponentLinearGradient;

    this.arrayRadialGradient = new Array<ComponentRadialGradient>();
    this.arrayRadialGradient.type = ComponentRadialGradient;
  }
}
ComponentDefs.addConstructor('ComponentDefs', ComponentDefs);
