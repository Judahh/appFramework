importJS('app/view/util/util');
importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');
importJS('app/view/common/divisorBlock/divisor/componentDivisor');
importJS('app/view/common/divisorBlock/divisor/subDivisor/componentSubDivisor');

class ComponentDivisorBlock extends Component {
    arraySubDivisor: Array<ComponentSubDivisor>;
    divisor: ComponentDivisor;

    constructor(fatherElement?: HTMLElement) {
        super(fatherElement);
        this.arraySubDivisor = new Array<ComponentSubDivisor>();
        this.arraySubDivisor.type = ComponentSubDivisor;
        this.divisor = new ComponentDivisor(this.element);
    }
}