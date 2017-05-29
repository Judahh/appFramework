importJS('app/view/util/util');
importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');
importJS('app/view/common/item/componentItem');

class ComponentMenuHorizontal extends Component{
  class: string;
  arrayItem: Array<ComponentItem>;

  constructor(fatherElement?: HTMLElement){
    super(fatherElement);
    this.arrayItem = new Array<ComponentItem>();
    this.arrayItem.type=ComponentItem;
  }
}