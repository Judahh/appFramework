importJS('app/view/util/util');
importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');
importJS('app/view/common/item/colorEffect/componentColorEffect');

class ComponentItem extends Component{
  routerLink: string;
  colorEffect: ComponentColorEffect;

  constructor(fatherElement?: HTMLElement){
    super(fatherElement);
    this.colorEffect = new ComponentColorEffect(this.element);
  }

  public render() {
    // console.log("ITEM RENDER");
    // this.getJSONPromise("test1");
    // console.log("ITEM RENDER PROMISE");
    this.colorEffect.render();
  }
}