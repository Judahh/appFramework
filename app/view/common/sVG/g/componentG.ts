importJS('app/view/util/util');
importJS('app/view/common/component/component');

importJS('app/view/common/sVG/circle/componentCircle');
importJS('app/view/common/sVG/ellipse/componentEllipse');
importJS('app/view/common/sVG/rectangle/componentRectangle');
importJS('app/view/common/sVG/polygon/componentPolygon');
importJS('app/view/common/sVG/polyline/componentPolyline');
importJS('app/view/common/sVG/line/componentLine');
importJS('app/view/common/sVG/path/componentPath');
importJS('app/view/common/sVG/text/componentText');
importJS('app/view/common/sVG/g/componentG');
importJS('app/view/common/sVG/defs/componentDefs');

class ComponentG extends Component {
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