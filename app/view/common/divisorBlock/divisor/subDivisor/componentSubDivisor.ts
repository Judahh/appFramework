importJS('app/view/util/util');
importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');
importJS('app/view/common/item/componentItem');
importJS('app/view/common/image/componentImage');
importJS('app/view/common/videoHolder/componentVideoHolder');

class ComponentSubDivisor extends Component {
    arrayItem: Array<ComponentItem>;
    image: ComponentImage;
    videoHolder: ComponentVideoHolder;
    // videoLink: ModelVideoLink;
    // basicForm: ModelBasicForm;
    // arrayDataInput: Array<ComponentDataInput>;

    constructor(father?: Component) {
        super(father);
        this.arrayItem = new Array<ComponentItem>();
        this.arrayItem.type = ComponentItem;
        // this.arrayDataInput = new Array<ComponentDataInput>();
        // this.arrayDataInput.type = ComponentDataInput;
        this.image = new ComponentImage(this);
        this.videoHolder = new ComponentVideoHolder(this);
    }
}