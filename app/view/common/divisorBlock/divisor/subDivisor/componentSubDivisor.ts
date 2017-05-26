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

    constructor(fatherElement?: HTMLElement) {
        super(fatherElement);
        this.item = new ComponentItem;
        this.image = new ComponentImage;
    }

    public render() {
        // console.log("ITEM RENDER");
        // this.getJSONPromise("test1");
        // console.log("ITEM RENDER PROMISE");
    }

    //   public renderAfterUpdateJSON(){
    //     this.arrayItem.forEach(item => {
    //         console.log("ITEM RENDER");
    //         item.render();
    //     });
    //   }
}