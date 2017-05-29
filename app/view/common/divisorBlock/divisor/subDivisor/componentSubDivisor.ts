importJS('app/view/util/util');
importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');
importJS('app/view/common/item/componentItem');
importJS('app/view/common/image/componentImage');

class ComponentSubDivisor extends Component {
    item: ComponentItem;
    image: ComponentImage;
    // videoLink: ModelVideoLink;
    // basicForm: ModelBasicForm;
    // inputData: ModelInputData;

    constructor(father?: Component) {
        super(father);
        this.item = new ComponentItem(this);
        this.image = new ComponentImage(this);
    }
}