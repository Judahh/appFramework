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

  constructor(father?: Component){
    super(father);
    this.colorEffect = new ComponentColorEffect(this);
    this.menuHorizontal = new ComponentMenuHorizontal(this);
    this.menuVertical = new ComponentMenuVertical(this);
  }

  renderAfterUpdateJSON(){
    if(this.routerLink!=undefined){
      this.element.addEventListener('click', () => this.onClick());
    }
  }

  onClick(){
    console.log("CLICK:"+this.routerLink);
    var body = this.seekFatherComponent("ComponentView");
    console.log("BODY:"+body);
  }
}