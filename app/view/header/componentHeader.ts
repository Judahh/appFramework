importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/menuHorizontal/componentMenuHorizontal');

// importCSS('app/view/header/componentHeader');

class ComponentHeader extends Component{
  menuHorizontal:ComponentMenuHorizontal;

  constructor(fatherElement?: HTMLElement){
    super(fatherElement);
    this.menuHorizontal=new ComponentMenuHorizontal(this.element);
  }

  public render() {
    this.menuHorizontal.render();
  }
}