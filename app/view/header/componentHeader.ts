importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/item/componentItem');

// importCSS('app/view/header/componentHeader');

class ComponentHeader extends Component{
  item:ComponentItem;

  constructor(fatherElement?: HTMLElement){
    super(fatherElement);
    this.item=new ComponentItem(this.element);
  }

  public render() {
    this.item.render();
  }
}