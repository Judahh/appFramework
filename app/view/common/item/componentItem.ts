importJS('app/view/util/util');
importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');
importJS('app/view/common/item/colorEffect/componentColorEffect');

class ComponentItem extends Component{
  routerLink: string;
  colorEffect: ComponentColorEffect;

  public render() {
    this.colorEffect = new ComponentColorEffect(this.element);
    // this.getJSONPromise("test1");
  }
}