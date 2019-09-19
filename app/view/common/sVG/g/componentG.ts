import 'simpleutils';
import { Component } from './../../component/component';
import { ComponentText } from './../text/componentText';
import { ComponentDefs } from './../defs/componentDefs';
import { ComponentGeneric } from './../../component/generic/componentGeneric';


export class ComponentG extends Component {
  arrayCircle: Array<ComponentGeneric>;
  arrayEllipse: Array<ComponentGeneric>;

  arrayRectangle: Array<ComponentGeneric>;
  arrayPolygon: Array<ComponentGeneric>;

  arrayPolyline: Array<ComponentGeneric>;
  arrayLine: Array<ComponentGeneric>;

  arrayPath: Array<ComponentGeneric>;

  arrayText: Array<ComponentText>;

  arrayG: Array<ComponentG>;
  arrayDefs: Array<ComponentDefs>;

  constructor(father?: Component) {
    super('g', father, true);
    this.className = 'ComponentG';
    this.arrayCircle = new Array<ComponentGeneric>();
    this.arrayCircle.type = ComponentGeneric;

    this.arrayEllipse = new Array<ComponentGeneric>();
    this.arrayEllipse.type = ComponentGeneric;

    this.arrayRectangle = new Array<ComponentGeneric>();
    this.arrayRectangle.type = ComponentGeneric;

    this.arrayPolygon = new Array<ComponentGeneric>();
    this.arrayPolygon.type = ComponentGeneric;

    this.arrayPolyline = new Array<ComponentGeneric>();
    this.arrayPolyline.type = ComponentGeneric;

    this.arrayLine = new Array<ComponentGeneric>();
    this.arrayLine.type = ComponentGeneric;

    this.arrayPath = new Array<ComponentGeneric>();
    this.arrayPath.type = ComponentGeneric;

    this.arrayText = new Array<ComponentText>();
    this.arrayText.type = ComponentText;

    this.arrayG = new Array<ComponentG>();
    this.arrayG.type = ComponentG;

    this.arrayDefs = new Array<ComponentDefs>();
    this.arrayDefs.type = ComponentDefs;
  }
}
ComponentG.addConstructor('ComponentG', ComponentG);
