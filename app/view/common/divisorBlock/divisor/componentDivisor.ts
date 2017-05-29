importJS('app/view/util/util');
importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');
importJS('app/view/common/item/componentItem');
importJS('app/view/common/divisorBlock/divisor/subDivisor/componentSubDivisor');

class ComponentDivisor extends Component {
    arraySubDivisor: Array<ComponentSubDivisor>;

    constructor(father?: Component) {
        super(father);
        this.arraySubDivisor = new Array<ComponentSubDivisor>();
        this.arraySubDivisor.type = ComponentSubDivisor;
    }
}