importJS('app/view/util/util');
importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');
importJS('app/view/common/item/componentItem');
importJS('app/view/common/image/componentImage');
importJS('app/view/common/dataInput/componentDataInput');
importJS('app/view/common/form/componentForm');
importJS('app/view/common/chart/componentChart');
importJS('app/view/common/progressBar/componentProgressBar');
importJS('app/view/common/videoHolder/componentVideoHolder');

class ComponentSubDivisor extends Component {
    arrayItem: Array<ComponentItem>;
    image: ComponentImage;
    videoHolder: ComponentVideoHolder;
    // videoLink: ModelVideoLink;
    arrayDataInput: Array<ComponentDataInput>;
    arrayForm: Array<ComponentForm>;
    arrayChart: Array<ComponentChart>;
    arrayProgressBar: Array<ComponentProgressBar>;
    

    constructor(father?: Component) {
        super(father);
        this.arrayItem = new Array<ComponentItem>();
        this.arrayItem.type = ComponentItem;
        this.arrayDataInput = new Array<ComponentDataInput>();
        this.arrayDataInput.type = ComponentDataInput;
        this.image = new ComponentImage(this);
        this.videoHolder = new ComponentVideoHolder(this);
        this.arrayForm = new Array<ComponentForm>();
        this.arrayForm.type = ComponentForm;
        this.arrayChart = new Array<ComponentChart>();
        this.arrayChart.type = ComponentChart;
        this.arrayProgressBar = new Array<ComponentProgressBar>();
        this.arrayProgressBar.type = ComponentProgressBar;
    }
}