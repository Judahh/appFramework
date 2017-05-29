importJS('app/view/common/component/component');
importJS('app/view/common/item/colorEffect/font/animationEffect/animationSubEffect/animationSubEffectHolder/componentAnimationSubEffectHolder');

class ComponentAnimationSubEffect extends Component{
  arrayAnimationSubEffectHolder: Array<ComponentAnimationSubEffectHolder>;

  constructor(father?: Component){
    super(father);
    this.arrayAnimationSubEffectHolder = new Array<ComponentAnimationSubEffectHolder>();
    this.arrayAnimationSubEffectHolder.type=ComponentAnimationSubEffectHolder;
  }
}