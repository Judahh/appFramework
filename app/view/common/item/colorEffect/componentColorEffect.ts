importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');
importJS('app/view/common/item/colorEffect/font/componentFont');

class ComponentColorEffect extends Component{
  colorEffect: string;
  font: ComponentFont;

  constructor(father?: Component){
    super(father);
    this.font = new ComponentFont(this);
  }
}