// import { Array } from 'simpleutils';
import { Util } from './../../../util/util';
import { Component } from './../../component/component';
import { ComponentCircle } from './../circle/componentCircle';
import { ComponentEllipse } from './../ellipse/componentEllipse';
import { ComponentRectangle } from './../rectangle/componentRectangle';
import { ComponentPolygon } from './../polygon/componentPolygon';
import { ComponentPolyline } from './../polyline/componentPolyline';
import { ComponentLine } from './../line/componentLine';
import { ComponentPath } from './../path/componentPath';
import { ComponentText } from './../text/componentText';
import { ComponentDefs } from './../defs/componentDefs';


export class ComponentG extends Component {
  arrayCircle: Array<ComponentCircle>;
  arrayEllipse: Array<ComponentEllipse>;

  arrayRectangle: Array<ComponentRectangle>;
  arrayPolygon: Array<ComponentPolygon>;

  arrayPolyline: Array<ComponentPolyline>;
  arrayLine: Array<ComponentLine>;

  arrayPath: Array<ComponentPath>;

  arrayText: Array<ComponentText>;

  arrayG: Array<ComponentG>;
  arrayDefs: Array<ComponentDefs>;

  constructor(father?: Component, tag?, sVG?) {
    super(father, 'g', true);
    this.arrayCircle = new Array<ComponentCircle>();
    this.arrayCircle.type = ComponentCircle;

    this.arrayEllipse = new Array<ComponentEllipse>();
    this.arrayEllipse.type = ComponentEllipse;

    this.arrayRectangle = new Array<ComponentRectangle>();
    this.arrayRectangle.type = ComponentRectangle;

    this.arrayPolygon = new Array<ComponentPolygon>();
    this.arrayPolygon.type = ComponentPolygon;

    this.arrayPolyline = new Array<ComponentPolyline>();
    this.arrayPolyline.type = ComponentPolyline;

    this.arrayLine = new Array<ComponentLine>();
    this.arrayLine.type = ComponentLine;

    this.arrayPath = new Array<ComponentPath>();
    this.arrayPath.type = ComponentPath;

    this.arrayText = new Array<ComponentText>();
    this.arrayText.type = ComponentText;

    this.arrayG = new Array<ComponentG>();
    this.arrayG.type = ComponentG;

    this.arrayDefs = new Array<ComponentDefs>();
    this.arrayDefs.type = ComponentDefs;
  }
}
ComponentG.addConstructor(ComponentG.name, ComponentG);
