importJS('app/view/serviceModel/serviceModel');
importJS('app/view/common/component/component');
importJS('app/view/common/item/colorEffect/font/animationEffect/information/componentInformation');

class ComponentAnimationEffect extends Component{
  information: ComponentInformation;
  class:string;
  subClass:string;
  subClasses:Array<any>;
  arrayInformation: Array<ComponentInformation>;

  constructor(fatherElement?: HTMLElement){
    super(fatherElement);
    this.information = new ComponentInformation(this.element);
    this.arrayInformation = new Array<ComponentInformation>();
    this.arrayInformation.type=ComponentInformation;
  }

  public render() {
    this.information.render();
  }
}