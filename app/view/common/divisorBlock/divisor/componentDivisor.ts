importJS('app/view/util/util');
importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');
importJS('app/view/common/item/componentItem');
importJS('app/view/common/divisorBlock/divisor/subDivisor/componentSubDivisor');

class ComponentDivisor extends Component {
    arraySubDivisor: Array<ComponentSubDivisor>;

    constructor(fatherElement?: HTMLElement) {
        super(fatherElement);
        this.arraySubDivisor = new Array<ComponentSubDivisor>();
        this.arraySubDivisor.type = ComponentSubDivisor;
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