// import { Array } from 'simpleutils';
import { Util } from './../../util/util';
import { Component } from './../component/component';
import { ComponentItem } from './../item/componentItem';
import { ComponentImage } from './../image/componentImage';
import { ComponentVideoHolder } from './../videoHolder/componentVideoHolder';
import { ComponentDataInput } from './../dataInput/componentDataInput';
import { ComponentChart } from './../chart/componentChart';
import { ComponentMap } from './../map/componentMap';
import { ComponentProgressBar } from './../progressBar/componentProgressBar';
import { ComponentSVG } from './../sVG/componentSVG';
try {require('./componentDivisor.css');}catch(e){};

export class ComponentDivisor extends Component {
    arrayItem: Array<ComponentItem>;
    arrayImage: Array<ComponentImage>;
    arrayVideoHolder: Array<ComponentVideoHolder>;
    // videoLink: ModelVideoLink;
    arrayDataInput: Array<ComponentDataInput>
    arrayChart: Array<ComponentChart>;
    arrayMap: Array<ComponentMap>;
    arrayProgressBar: Array<ComponentProgressBar>;
    arraySVG: Array<ComponentSVG>;
    arrayDivisor: Array<ComponentDivisor>;

    constructor(father?: Component) {
        super(father);
        this.arrayItem = new Array<ComponentItem>();
        this.arrayItem.type = ComponentItem;
        this.arrayDataInput = new Array<ComponentDataInput>();
        this.arrayDataInput.type = ComponentDataInput;
        this.arrayImage = new Array<ComponentImage>();
        this.arrayImage.type = ComponentImage;
        this.arrayVideoHolder = new Array<ComponentVideoHolder>();
        this.arrayVideoHolder.type = ComponentVideoHolder;
        this.arrayChart = new Array<ComponentChart>();
        this.arrayChart.type = ComponentChart;
        this.arrayMap = new Array<ComponentMap>();
        this.arrayMap.type = ComponentMap;
        this.arrayProgressBar = new Array<ComponentProgressBar>();
        this.arrayProgressBar.type = ComponentProgressBar;
        this.arraySVG = new Array<ComponentSVG>();
        this.arraySVG.type = ComponentSVG;
        this.arrayDivisor = new Array<ComponentDivisor>();
        this.arrayDivisor.type = ComponentDivisor;
    }
}
