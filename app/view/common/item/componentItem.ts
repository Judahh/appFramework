importJS('app/view/util/util');
importJS('app/view/common/component/component');
importJS('app/view/common/item/colorEffect/componentColorEffect');
importJS('app/view/common/menuHorizontal/componentMenuHorizontal');
importJS('app/view/common/menuVertical/componentMenuVertical');

class ComponentItem extends Component{
  routerLink: string;
  colorEffect: ComponentColorEffect;
  menuHorizontal: ComponentMenuHorizontal;
  menuVertical: ComponentMenuVertical;

  view: ComponentView;

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
    // console.log("CLICK:"+this.routerLink);
    if(this.view==undefined){
      this.view = <ComponentView> this.seekFatherComponent("ComponentView");
      this.view.goToPage("test2");
    }else{
      this.view.goToPage("test2");
    }
    // console.log("BODY:"+body);
    
  }
}