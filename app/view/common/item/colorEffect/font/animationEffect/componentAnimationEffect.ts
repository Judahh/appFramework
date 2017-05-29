importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');
importJS('app/view/common/item/colorEffect/font/animationEffect/information/componentInformation');

class ComponentAnimationEffect extends Component{
  class:string;
  subClass:string;
  subClasses:Array<any>;
  arrayInformation: Array<ComponentInformation>;

  constructor(father?: Component){
    super(father);
    this.arrayInformation = new Array<ComponentInformation>();
    this.arrayInformation.type=ComponentInformation;
  }
}