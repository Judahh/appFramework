importJS('app/view/util/util');
importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');
importJS('app/view/common/item/colorEffect/componentColorEffect');

class ComponentItem extends Component{
  routerLink: string;
  colorEffect: ComponentColorEffect;

  public render() {
    // this.colorEffect = new ComponentColorEffect(this.element);
    // this.colorEffect.font = new ComponentFont(this.colorEffect.getElement());
    // this.colorEffect.font.animationEffect = new ComponentAnimationEffect(this.colorEffect.font.getElement());
    // this.colorEffect.font.animationEffect.information = new ComponentInformation(this.colorEffect.font.animationEffect.getElement());
    // this.colorEffect.font.animationEffect.arrayInformation = new Array<ComponentInformation>();
    // this.getJSONPromise("test1");
  }
}