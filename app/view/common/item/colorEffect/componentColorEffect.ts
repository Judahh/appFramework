importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/item/colorEffect/modelColorEffect');
importJS('app/view/common/component/component');
importJS('app/view/common/item/colorEffect/font/componentFont');

class ComponentColorEffect extends Component{
  private font;

  public render() {
    this.font = new ComponentFont(this.element);
  }
}