importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/item/colorEffect/font/animationEffect/modelAnimationEffect');
importJS('app/view/common/component/component');
importJS('app/view/common/item/colorEffect/font/animationEffect/information/componentInformation');

class ComponentAnimationEffect extends Component{
  information: ComponentInformation;
  class:string;
  subClass:string;
  subClasses:Array<any>;
  arrayInformation: Array<ModelInformation>;

  public render() {
    this.information = new ComponentInformation(this.element);
  }
}