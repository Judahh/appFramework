importJS('app/view/util/util');
importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');
importJS('app/view/common/item/colorEffect/componentColorEffect');
importJS('app/view/common/menuHorizontal/componentMenuHorizontal');
importJS('app/view/common/menuVertical/componentMenuVertical');

class ComponentItem extends Component{
  routerLink: string;
  colorEffect: ComponentColorEffect;
  menuHorizontal: ComponentMenuHorizontal;
  menuVertical: ComponentMenuVertical;

  constructor(fatherElement?: HTMLElement){
    super(fatherElement);
    this.colorEffect = new ComponentColorEffect(this.element);
    this.menuHorizontal = new ComponentMenuHorizontal(this.element);
    this.menuVertical = new ComponentMenuVertical(this.element);
  }
}