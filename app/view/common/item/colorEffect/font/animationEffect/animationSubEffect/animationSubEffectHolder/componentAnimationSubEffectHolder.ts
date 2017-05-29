importJS('app/view/common/component/component');
importJS('app/view/common/item/colorEffect/font/animationEffect/animationSubEffect/animationSubEffectHolder/information/componentInformation');

class ComponentAnimationSubEffectHolder extends Component{
  information: ComponentInformation;

  constructor(father?: Component){
    super(father);
    this.information = new ComponentInformation(this);
  }
}