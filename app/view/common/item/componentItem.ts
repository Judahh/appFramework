importJS('app/view/util/util');
importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/item/modelItem');
importJS('app/view/common/component/component');
importJS('app/view/common/item/colorEffect/componentColorEffect');

class ComponentItem extends Component{
  private colorEffect;

  public render() {
    this.colorEffect = new ComponentColorEffect(this.element);
  }
}